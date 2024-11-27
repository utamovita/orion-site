import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContactFormConfig } from "@components/views/home/contact/contact-form/use-contact-form-config.hook";

export function useContactForm() {
  const { schema, fieldsContact } = useContactFormConfig();
  const { control, handleSubmit, formState } = useForm({
    defaultValues: {
      name: fieldsContact.name.defaultValue,
      email: fieldsContact.email.defaultValue,
      topic: fieldsContact.topic.defaultValue,
      message: fieldsContact.message.defaultValue,
      agreements: fieldsContact.agreements.defaultValue,
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
