import React, { createContext, useContext, useState } from "react";
import type {
  DragEndEvent,
  DragOverEvent,
  UniqueIdentifier,
} from "@dnd-kit/core";
import {
  closestCenter,
  DndContext,
  DragOverlay,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { restrictToHorizontalAxis } from "@dnd-kit/modifiers";
import {
  arrayMove,
  horizontalListSortingStrategy,
  SortableContext,
  useSortable,
} from "@dnd-kit/sortable";
import type { TableColumnsType } from "antd";
import { FiEdit } from "react-icons/fi"; // Edit icon from react-icons
import { AiFillDelete } from "react-icons/ai"; // Delete icon from react-icons
import { StyledTable } from "../../../styles/table";

interface DataType {
  key: string;
  userName: string;
  phoneNumber: string;
  group: string;
  dateTime: string;
  action: string;
}

interface HeaderCellProps extends React.HTMLAttributes<HTMLTableCellElement> {
  id: string;
}

interface BodyCellProps extends React.HTMLAttributes<HTMLTableCellElement> {
  id: string;
}

interface DragIndexState {
  active: UniqueIdentifier;
  over: UniqueIdentifier | undefined;
  direction?: "left" | "right";
}

const DragIndexContext = createContext<DragIndexState>({
  active: -1,
  over: -1,
});

const dragActiveStyle = (dragState: DragIndexState, id: string) => {
  const { active, over, direction } = dragState;
  let style: React.CSSProperties = {};
  if (active && active === id) {
    style = { backgroundColor: "gray", opacity: 0.5 };
  } else if (over && id === over && active !== over) {
    style =
      direction === "right"
        ? { borderRight: "1px dashed gray" }
        : { borderLeft: "1px dashed gray" };
  }
  return style;
};

const TableBodyCell: React.FC<BodyCellProps> = (props) => {
  const dragState = useContext<DragIndexState>(DragIndexContext);
  return (
    <td
      {...props}
      style={{ ...props.style, ...dragActiveStyle(dragState, props.id) }}
    />
  );
};

const TableHeaderCell: React.FC<HeaderCellProps> = (props) => {
  const dragState = useContext(DragIndexContext);
  const { attributes, listeners, setNodeRef, isDragging } = useSortable({
    id: props.id,
  });
  const style: React.CSSProperties = {
    ...props.style,
    cursor: "move",
    ...(isDragging
      ? { position: "relative", zIndex: 9999, userSelect: "none" }
      : {}),
    ...dragActiveStyle(dragState, props.id),
  };
  return (
    <th
      {...props}
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    />
  );
};

const dataSource: DataType[] = [
  {
    key: "1",
    userName: "John Brown",
    phoneNumber: "123-456-7890",
    group: "Admin",
    dateTime: "2024-09-07 12:30 PM",
    action: "",
  },
  {
    key: "2",
    userName: "Jim Green",
    phoneNumber: "987-654-3210",
    group: "User",
    dateTime: "2024-09-06 11:00 AM",
    action: "",
  },
  {
    key: "3",
    userName: "Joe Black",
    phoneNumber: "456-789-1234",
    group: "User",
    dateTime: "2024-09-05 09:45 AM",
    action: "",
  },
  {
    key: "4",
    userName: "George Hcc",
    phoneNumber: "321-654-9876",
    group: "Admin",
    dateTime: "2024-09-04 02:15 PM",
    action: "",
  },
];

const baseColumns: TableColumnsType<DataType> = [
  { title: "User Name", dataIndex: "userName" },
  { title: "Phone Number", dataIndex: "phoneNumber" },
  { title: "Group", dataIndex: "group" },
  { title: "Date & Time", dataIndex: "dateTime" },
  {
    title: "Action",
    dataIndex: "action",
    width: "50px",
    render: (_: string, record: DataType) => (
      <div style={{ display: "flex", gap: "8px" }}>
        <FiEdit
          style={{ color: "#1A54EB", cursor: "pointer" }}
          onClick={() => console.log("Edit", record.key)}
        />
        <AiFillDelete
          style={{ color: "#FF3521", cursor: "pointer" }}
          onClick={() => console.log("Delete", record.key)}
        />
      </div>
    ),
  },
];

const UsersTable: React.FC = () => {
  const [dragIndex, setDragIndex] = useState<DragIndexState>({
    active: -1,
    over: -1,
  });

  const [columns, setColumns] = useState(() =>
    baseColumns.map((column, i) => ({
      ...column,
      key: `${i}`,
      onHeaderCell: () => ({ id: `${i}` }),
      onCell: () => ({ id: `${i}` }),
    }))
  );

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 1,
      },
    })
  );

  const onDragEnd = ({ active, over }: DragEndEvent) => {
    if (active.id !== over?.id) {
      setColumns((prevState) => {
        const activeIndex = prevState.findIndex((i) => i.key === active?.id);
        const overIndex = prevState.findIndex((i) => i.key === over?.id);
        return arrayMove(prevState, activeIndex, overIndex);
      });
    }
    setDragIndex({ active: -1, over: -1 });
  };

  const onDragOver = ({ active, over }: DragOverEvent) => {
    const activeIndex = columns.findIndex((i) => i.key === active.id);
    const overIndex = columns.findIndex((i) => i.key === over?.id);
    setDragIndex({
      active: active.id,
      over: over?.id,
      direction: overIndex > activeIndex ? "right" : "left",
    });
  };

  return (
    <DndContext
      sensors={sensors}
      modifiers={[restrictToHorizontalAxis]}
      onDragEnd={onDragEnd}
      onDragOver={onDragOver}
      collisionDetection={closestCenter}
    >
      <SortableContext
        items={columns.map((i) => i.key)}
        strategy={horizontalListSortingStrategy}
      >
        <DragIndexContext.Provider value={dragIndex}>
          <StyledTable
            rowKey="key"
            columns={columns}
            dataSource={dataSource}
            components={{
              header: { cell: TableHeaderCell },
              body: { cell: TableBodyCell },
            }}
          />
        </DragIndexContext.Provider>
      </SortableContext>
      <DragOverlay>
        <th style={{ backgroundColor: "gray", padding: 16 }}>
          {
            columns[columns.findIndex((i) => i.key === dragIndex.active)]
              ?.title as React.ReactNode
          }
        </th>
      </DragOverlay>
    </DndContext>
  );
};

export default UsersTable;
