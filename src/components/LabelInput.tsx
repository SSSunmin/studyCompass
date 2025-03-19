import React, {ChangeEvent} from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";


interface LabelInputProps {
    id: string;
    type?: React.HTMLInputTypeAttribute;
    label?: string;
    placeholder?: string;
    note?: string;
    value?: string | number;
    readonly?: boolean;
    accept?: string;
    onChange?: (e:ChangeEvent<HTMLInputElement>) => void;
}

function LabelInput({
                        id,
                        label,
                        type = "text",
                        placeholder,
                        note,
                        value,
                        readonly = false,
                        accept,
                        onChange,
                    }: LabelInputProps) {
    return (
        <div className="w-[400px]">
            {label && (
                <Label htmlFor={id} className="text-[14px] font-bold">
                    {label}
                </Label>
            )}

            <Input
                className="text-[14px] h-[40px]"
                id={id}
                type={type}
                value={value}
                placeholder={placeholder}
                required
                autoComplete="off"
                readOnly={readonly}
                accept={accept}
                onChange={onChange}
            />
            {note && <p className="ml-[10px] text-[12px] text-gray-500">{note}</p>}
        </div>
    );
}

export default LabelInput;
