import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dispatch ,SetStateAction } from "react"

type InputLabelProps = {
  fieldId: string
  labelContent: string,
  inputType: string,
  placeholder: string,
  contentState: string,
  setContent: Dispatch<SetStateAction<string>>
}

export function InputWithLabel({
  labelContent: label_content, 
  inputType: input_type, 
  fieldId: field_id, 
  placeholder: placeholder,
  contentState: contentState,
  setContent: setContent
}: InputLabelProps) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor={field_id}>{label_content}</Label>
      <Input type={input_type} id={field_id} placeholder={placeholder} value={contentState} onChange={(e) => {setContent(e.target.value)}} />
    </div>
  )
}
