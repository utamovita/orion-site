import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
 useWorkFormConfig
} from "@components/views/career/work/form-popups/work-form/use-work-form-config.hook";

export function useWorkForm() {
  const { schema, fields } = useWorkFormConfig();
  const { control, handleSubmit, formState } = useForm({
    defaultValues: {
      name: fields.name.defaultValue,
      email: fields.email.defaultValue,
      phone: fields.phone.defaultValue,
      message: fields.message.defaultValue,
      file: fields.file.defaultValue,
      agreements: fields.agreements.defaultValue,
    },
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  });

  return {
    isSubmitting: formState.isSubmitting,
    onSubmit,
    control,
  };
}
