import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface AddItemFormProps {
  onAdd: (title: string, fileName?: string) => void;
}

const AddItemForm: React.FC<AddItemFormProps> = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [fileName, setFileName] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onAdd(title.trim(), fileName || undefined);
      setTitle("");
      setFileName("");
      setIsExpanded(false);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  if (!isExpanded) {
    return (
      <Button
        onClick={() => setIsExpanded(true)}
        className="w-full mb-4 bg-blue-500 hover:bg-blue-600 text-white"
        variant="default"
      >
        <Icon name="Plus" size={16} />
        Добавить материал
      </Button>
    );
  }

  return (
    <Card className="mb-4 border-blue-200">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg text-blue-700">Новый материал</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Название материала"
              required
              className="focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-600 mb-2">
              Прикрепить файл (необязательно)
            </label>
            <input
              type="file"
              onChange={handleFileChange}
              className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              accept=".pdf,.doc,.docx,.ppt,.pptx,.txt"
            />
            {fileName && (
              <div className="mt-2 text-sm text-slate-600">
                Выбран файл: {fileName}
              </div>
            )}
          </div>

          <div className="flex space-x-3">
            <Button type="submit" className="bg-blue-500 hover:bg-blue-600">
              Добавить
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                setIsExpanded(false);
                setTitle("");
                setFileName("");
              }}
            >
              Отмена
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default AddItemForm;
