"use client";
import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import type { DropResult } from "react-beautiful-dnd";

const DATA = [
  {
    id: "2a1b3c4d-5e6f-7g8h-9i10-j11k12l13m14",
    name: "Walmart",
    items: [
      { id: "15n16o17p-18q19r-20s21t-22u23v24w25x26", name: "Milk" },
      { id: "27y28z29a-30b31c-32d33e34f35", name: "Butter" }
    ],
    tint: 1
  },
  {
    id: "36g37h38i-39j40k41l42m43n44o45p46",
    name: "Target",
    items: [
      { id: "47q48r49s-50t51u52v53w54x55y56z57a", name: "Bread" },
      { id: "58b59c60d-61e62f63g64h65i66j67k68l69m", name: "Eggs" }
    ],
    tint: 2
  },
  {
    id: "70n71o72p-73q74r75s76t77u78v79w80x81y82z83a",
    name: "Kroger",
    items: [
      { id: "84b85c86d-87e88f89g90h91i92j93k94l95m", name: "Cheese" },
      { id: "96n97o98p-99q00r01s02t03u04v05w06x07y08z", name: "Yogurt" }
    ],
    tint: 3
  }
];

export default function Home() {
  const [stores, setStores] = useState(DATA);

  const handleDragDrop = (results: DropResult) => {
    console.log("Dropped: ", results);
    const { source, destination, type } = results;
    if (!destination) return;

    if (source.droppableId === destination.droppableId && source.index === destination.index)
      return;

    if (type === "group") {
      const reOrderedStore = [...stores];
      const sourceIndex = source.index;
      const destinationIndex = destination.index;

      const [removedStore] = reOrderedStore.splice(sourceIndex, 1);
      reOrderedStore.splice(destinationIndex, 0, removedStore);

      return setStores(reOrderedStore);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 h-screen">
      <div className="flex place-items-center before:absolute before:h-[800px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[300px] after:w-full sm:after:w-[300px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <h1 className="text-2xl font-bold pb-6">Drag and Drop test</h1>
      </div>
      <section className="flex flex-col items-center w-[400px] h-[500px] border rounded-lg p-2">
        <DragDropContext onDragEnd={handleDragDrop}>
          <div className="w-full m-2 h-max text-center backdrop-blur-lg rounded-lg">
            <h1 className="text-2xl font-semibold text-emerald-600 ">Shopping List</h1>
          </div>
          <span className="border border-white/20 w-full mb-8"></span>
          <Droppable droppableId="ROOT" type="group">
            {(provided) => (
              <main className="w-full" {...provided.droppableProps} ref={provided.innerRef}>
                {stores.map((store, index) => (
                  <Draggable draggableId={store.id} key={store.id} index={index}>
                    {(provided) => (
                      <div
                        {...provided.dragHandleProps}
                        {...provided.draggableProps}
                        ref={provided.innerRef}
                        className="bg-emerald-400/30 w-full mb-4 p-2 h-max text-center backdrop-blur-lg rounded-sm"
                      >
                        <h1 className="text-xl font-light text-white">{store.name}</h1>
                      </div>
                    )}
                  </Draggable>
                ))}
              </main>
            )}
          </Droppable>
        </DragDropContext>
      </section>
    </main>
  );
}
