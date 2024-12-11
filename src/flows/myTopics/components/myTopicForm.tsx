import { Box, Button, TextField } from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { MyTopic } from "../data/myTopicState";

interface TopicFormProps {
  onClose: () => void;
  initialValues?: MyTopic;
}

export const MyTopicForm: React.FC<TopicFormProps> = ({
  onClose,
  initialValues,
}) => {
  const { control, handleSubmit, reset } = useForm<MyTopic>({
    defaultValues: initialValues || {
      description: "",
      ID: "",
      name: "",
      hourlyRate: 0,
      minimalMinutes: 0,
    },
  });

  const onSubmit = (data: MyTopic) => {
    onClose();
    console.log(data);
    //if (initialValues) {
    //  updateMyTopic(data);
    //} else {
    //  addMyTopic(data);
    //}
  };

  React.useEffect(() => {
    if (initialValues) {
      reset(initialValues);
    }
  }, [initialValues, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box display="flex" flexDirection="column" gap={2}>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <TextField {...field} label="Name" variant="outlined" />
          )}
        />
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Extended Description"
              variant="outlined"
              multiline
              rows={4}
            />
          )}
        />
        <Controller
          name="hourlyRate"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Hourly Rate"
              type="number"
              variant="outlined"
            />
          )}
        />
        <Controller
          name="minimalMinutes"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Minimal Minutes"
              type="number"
              variant="outlined"
            />
          )}
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </Box>
    </form>
  );
};

export default MyTopicForm;
