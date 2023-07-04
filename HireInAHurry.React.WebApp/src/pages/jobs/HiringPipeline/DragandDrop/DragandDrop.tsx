import { JobsCandidateCard } from "@sinnamkushwah/hireinahurry.jobs.react.component";
import React, { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable, DropResult } from "react-beautiful-dnd";
import { fetchCandiateCardDetails, fetchCandiateInfoDetails } from "../../../../Redux/slices/JobSlice";
import JobsTableData from "../../JobsTableData";

interface Column {
  id: string;
  title: string;
  cards:Card[];
}
interface Card {
    id: string;
    candidateName: string;
    email: string;
    contactNo: number;
    lastActionOn: string;
    status: string | string[];
    location: string;
    newlyApplied?: {
      candidateId: string;
      candidateName: string;
      email: string;
      contactNo: number;
      lastActionOn: string;
      status: string | string[];
      location: string;
      skillmatch: string;
    }[];
  }

const initialColumns: Column[] = [
  {
    id: "column-1",
    title: "New Applied",
    cards: JobsTableData[0]?.newlyApplied?.map((candidate) => ({
        id: candidate.candidateId,
        candidateName: candidate.candidateName,
        email: candidate.email,
        contactNo: candidate.contactNo,
        lastActionOn: candidate.lastActionOn,
        status: candidate.status,
        location: candidate.location,
      })) || [],
  },
  {
    id: "column-2",
    title: "Screening",
    cards: JobsTableData[0]?.screening?.map((candidate) => ({
        id: candidate.candidateId,
        candidateName: candidate.candidateName,
        email: candidate.email,
        contactNo: candidate.contactNo,
        lastActionOn: candidate.lastActionOn,
        status: candidate.status,
        location: candidate.location,
      })) || [],
  },
  {
    id: "column-3",
    title: "Interview",
    cards: JobsTableData[0]?.Interview?.map((candidate) => ({
        id: candidate.candidateId,
        candidateName: candidate.candidateName,
        email: candidate.email,
        contactNo: candidate.contactNo,
        lastActionOn: candidate.lastActionOn,
        status: candidate.status,
        location: candidate.location,
      })) || [],
  },
];

const DragAndDrop: React.FC = () => {
  const [columns, setColumns] = useState<Column[]>(initialColumns);
  const [newColumnName, setNewColumnName] = useState("");
  const [editColumnId, setEditColumnId] = useState("");

  
  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId, type } = result;

    if (!destination) {
      return;
    }

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    if (type === "card") {
      const sourceColumn = columns.find((column) => column.id === source.droppableId);
      const destinationColumn = columns.find((column) => column.id === destination.droppableId);

      if (!sourceColumn || !destinationColumn) {
        return;
      }

      const sourceCards = Array.from(sourceColumn.cards);
      const destinationCards = Array.from(destinationColumn.cards);

      const draggedCard = sourceCards.find((card) => card.id === draggableId);

      if (!draggedCard) {
        return;
      }

      sourceCards.splice(source.index, 1);
      destinationCards.splice(destination.index, 0, draggedCard);

      const updatedColumns = columns.map((column) => {
        if (column.id === source.droppableId) {
          return {
            ...column,
            cards: sourceCards,
          };
        } else if (column.id === destination.droppableId) {
          return {
            ...column,
            cards: destinationCards,
          };
        } else {
          return column;
        }
      });

      setColumns(updatedColumns);
    } else if (type === "column") {
      const updatedColumns = Array.from(columns);
      const [removedColumn] = updatedColumns.splice(source.index, 1);
      updatedColumns.splice(destination.index, 0, removedColumn);

      setColumns(updatedColumns);
    }
  };

  
  const addColumn = () => {
    if (newColumnName.trim() === "") {
      return;
    }

    const newColumn: Column = {
      id: `column-${columns.length + 1}`,
      title: newColumnName,
      cards: [],
    };

    setColumns([...columns, newColumn]);
    setNewColumnName("");
  };

  const deleteColumn = (columnId: string) => {
    const newColumns = columns.filter((column) => column.id !== columnId);
    setColumns(newColumns);
  };

  const handleColumnTitleChange = (e: React.ChangeEvent<HTMLInputElement>, columnId: string) => {
    const updatedColumns = columns.map((column) => {
      if (column.id === columnId) {
        return {
          ...column,
          title: e.target.value,
        };
      }
      return column;
    });

    setColumns(updatedColumns);
  };


//   const handleColumnTitleClick = (columnId: string) => {
//     const updatedColumns = columns.map((column) => {
//       if (column.id === columnId) {
//         const newTitle = prompt("Enter the new column name", column.title);
//         return {
//           ...column,
//           title: newTitle || column.title,
//         };
//       }
//       return column;
//     });

//     setColumns(updatedColumns);
//   };
const handleColumnTitleDoubleClick = (columnId: string) => {
    setEditColumnId(columnId);
  };

  const handleColumnTitleBlur = () => {
    setEditColumnId("");
  };

  const renderCard = (card: Card, index: number) => {
    const cardData = {
        name: card.candidateName,
        email: card.email,
        contact: card.contactNo,
        days: card.lastActionOn, // Example value, update as needed
        status: card.status, // Example value, update as needed
      };
      return(

      
    <Draggable key={card.id} draggableId={card.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={{
            userSelect: "none",
            padding: 16,
            margin: "0 0 8px 0",
            minHeight: "50px",
            backgroundColor: "#fff",
            border: "1px solid #ddd",
            borderRadius: "2px",
            ...provided.draggableProps.style,
          }}
        >
        <JobsCandidateCard cardData={cardData}
         onClick={function (): void {
                      throw new Error("Function not implemented.");
                  } } onIconClick={function (email: string): void {
                      throw new Error("Function not implemented.");
                  } }/>
        </div>
      )}
    </Draggable>
  )
                };

  const renderColumn = (column: Column, index: number) => {
    const isEditing = editColumnId === column.id;
    return(
  
  
   <Draggable key={column.id} draggableId={column.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          style={{
            display: "flex",
            flexDirection: "column",
            width: "300px",
            padding: "8px",
            backgroundColor: "#f4f5f7",
            borderRadius: "4px",
            marginRight: "16px",
            ...provided.draggableProps.style,
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
          {isEditing ? (
                <input
                  type="text"
                  value={column.title}
                  onChange={(e) => handleColumnTitleChange(e, column.id)}
                  onBlur={handleColumnTitleBlur}
                  autoFocus
                />
              ) : (
                <h3
                  {...provided.dragHandleProps}
                  style={{ marginRight: "8px" }}
                  onDoubleClick={() => handleColumnTitleDoubleClick(column.id)}
                >
                  {column.title}
                </h3>
              )}
            <button onClick={() => deleteColumn(column.id)}>Delete</button>
          </div>
          <Droppable droppableId={column.id} type="card">
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                style={{
                  background: "#fff",
                  padding: "8px",
                  minHeight: "100px",
                  borderRadius: "4px",
                }}
              >
                {column.cards.map((card, index) => renderCard(card, index))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  )};

//   useEffect(()=>{
//     console.log("Hello User")
//   fetchCandiateInfoDetails();
//   },[])

  return (
    <div>
      <input
        type="text"
        placeholder="Enter column name"
        value={newColumnName}
        onChange={(e) => setNewColumnName(e.target.value)}
      />
      <button onClick={addColumn}>Add Column</button>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="board" direction="horizontal" type="column">
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              style={{
                display: "flex",
                overflowX: "auto",
                padding: "8px",
              }}
            >
              {columns.map((column, index) => renderColumn(column, index))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default DragAndDrop;
