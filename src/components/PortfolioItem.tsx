import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

interface PortfolioItemProps {
  id: string;
  title: string;
  fileName?: string;
  onUpdate: (id: string, title: string, fileName?: string) => void;
  onDelete: (id: string) => void;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({
  id,
  title,
  fileName,
  onUpdate,
  onDelete,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(title);
  const [editFileName, setEditFileName] = useState(fileName || "");

  const handleSave = () => {
    onUpdate(id, editTitle, editFileName || undefined);
    setIsEditing(false);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setEditFileName(file.name);
    }
  };

  return (
    <Card className="mb-4 hover:shadow-md transition-shadow duration-200">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          {isEditing ? (
            <Input
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              className="font-semibold"
              placeholder="Название материала"
            />
          ) : (
            <CardTitle className="text-lg text-slate-700">{title}</CardTitle>
          )}

          <div className="flex space-x-2">
            {isEditing ? (
              <>
                <Button
                  size="sm"
                  onClick={handleSave}
                  className="bg-blue-500 hover:bg-blue-600"
                >
                  <Icon name="Check" size={16} />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setIsEditing(false)}
                >
                  <Icon name="X" size={16} />
                </Button>
              </>
            ) : (
              <>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => setIsEditing(true)}
                >
                  <Icon name="Edit" size={16} />
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => onDelete(id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Icon name="Trash2" size={16} />
                </Button>
              </>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent>
        {isEditing ? (
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-slate-600 mb-2">
                Прикрепить файл
              </label>
              <input
                type="file"
                onChange={handleFileChange}
                className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                accept=".pdf,.doc,.docx,.ppt,.pptx,.txt"
              />
            </div>
            {editFileName && (
              <div className="text-sm text-slate-600">
                Выбран файл: {editFileName}
              </div>
            )}
          </div>
        ) : (
          <>
            {fileName ? (
              <div className="flex items-center space-x-2 text-sm text-slate-600">
                <Icon name="FileText" size={16} />
                <span>{fileName}</span>
              </div>
            ) : (
              <div className="text-sm text-slate-400 italic">
                Файл не прикреплен
              </div>
            )}
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default PortfolioItem;
