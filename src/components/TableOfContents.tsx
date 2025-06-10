import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import Icon from "@/components/ui/icon";
import PortfolioItem from "./PortfolioItem";
import AddItemForm from "./AddItemForm";

interface PortfolioItemData {
  id: string;
  title: string;
  fileName?: string;
}

const TableOfContents = () => {
  const [items, setItems] = useState<PortfolioItemData[]>([
    { id: "1", title: "Методические рекомендации", fileName: "metodika.pdf" },
    { id: "2", title: "План занятий", fileName: "plan.docx" },
    { id: "3", title: "Исследовательская работа" },
  ]);

  const handleAddItem = (title: string, fileName?: string) => {
    const newItem: PortfolioItemData = {
      id: Date.now().toString(),
      title,
      fileName,
    };
    setItems([...items, newItem]);
  };

  const handleUpdateItem = (id: string, title: string, fileName?: string) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, title, fileName } : item,
      ),
    );
  };

  const handleDeleteItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="fixed top-8 right-8 z-50">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            className="bg-white/90 backdrop-blur-sm border border-slate-200 text-slate-700 hover:bg-white hover:shadow-lg transition-all duration-200"
            variant="outline"
          >
            <Icon name="Menu" size={20} />
            Table of contents
          </Button>
        </SheetTrigger>

        <SheetContent className="w-[400px] sm:w-[540px] bg-white/95 backdrop-blur-sm">
          <SheetHeader className="border-b border-slate-200 pb-4 mb-6">
            <SheetTitle className="text-xl text-slate-800 font-montserrat">
              📋 Table of contents
            </SheetTitle>
          </SheetHeader>

          <ScrollArea className="h-[calc(100vh-120px)]">
            <div className="space-y-4 pr-4">
              <AddItemForm onAdd={handleAddItem} />

              {items.length === 0 ? (
                <div className="text-center py-8 text-slate-500">
                  <Icon
                    name="BookOpen"
                    size={48}
                    className="mx-auto mb-4 text-slate-300"
                  />
                  <p>Портфолио пока пустое</p>
                  <p className="text-sm">Добавьте первый материал</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {items.map((item) => (
                    <PortfolioItem
                      key={item.id}
                      id={item.id}
                      title={item.title}
                      fileName={item.fileName}
                      onUpdate={handleUpdateItem}
                      onDelete={handleDeleteItem}
                    />
                  ))}
                </div>
              )}

              <div className="pt-6 border-t border-slate-200">
                <div className="text-sm text-slate-500 text-center">
                  Всего материалов: {items.length}
                </div>
              </div>
            </div>
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default TableOfContents;
