import React, { ReactNode } from "react";
import styled from "styled-components";
import {
  TextField,
  Button,
  Slider,
  Typography,
  Autocomplete,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { languages, genders, countries } from "events-tomeroko3";

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;

  max-height: calc(100vh - 260px);
  height: calc(100vh - 260px);
`;

const FilterSection = styled.div`
  margin-bottom: 1.5rem;
`;

const StyledButton = styled(Button)`
  width: 100%;
  margin-top: auto;
`;

const FormContainer = styled.form`
  height: calc(100vh - 280px);
  display: flex;
  gap: 20px;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  overflow-y: auto;
`;

const schema = z.object({
  priceRange: z.tuple([z.number(), z.number()]),
  languages: z.array(z.string()).optional(),
  country: z.string().optional(),
  gender: z.string().optional(),
  availability: z.array(z.string()).optional(),
});

type FormData = z.infer<typeof schema>;

const availabilityOptions = [
  "Available now",
  "Available today",
  "Short response time",
] as const;

export const FilterSideBar: React.FC = () => {
  const { control, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      priceRange: [0, 100],
      languages: [],
      country: "",
      gender: "",
      availability: [],
    },
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Here you would typically update the search results based on the filters
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <FilterContainer>
        <FilterSection>
          <Typography variant="h6" gutterBottom>
            Price Range
          </Typography>
          <Controller
            name="priceRange"
            control={control}
            render={({ field }) => (
              <Slider
                {...field}
                valueLabelDisplay="auto"
                min={0}
                max={100}
                marks={[
                  { value: 0, label: "$0" },
                  { value: 100, label: "$100" },
                ]}
              />
            )}
          />
        </FilterSection>

        <FilterSection>
          <Typography variant="h6" gutterBottom>
            Languages
          </Typography>
          <Controller
            name="languages"
            control={control}
            render={({ field }) => (
              <Autocomplete
                {...field}
                multiple
                options={Object.values(languages)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    placeholder="Select languages"
                  />
                )}
                onChange={(_, data) => field.onChange(data)}
              />
            )}
          />
        </FilterSection>

        <FilterSection>
          <Typography variant="h6" gutterBottom>
            Country
          </Typography>
          <Controller
            name="country"
            control={control}
            render={({ field }) => (
              <Autocomplete
                {...field}
                options={Object.values(countries)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    placeholder="Select country"
                  />
                )}
                onChange={(_, data) => field.onChange(data)}
              />
            )}
          />
        </FilterSection>

        <FilterSection>
          <Typography variant="h6" gutterBottom>
            Gender
          </Typography>
          <Controller
            name="gender"
            control={control}
            render={({ field }) => (
              <Autocomplete
                {...field}
                options={Object.values(genders)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    placeholder="Select gender"
                  />
                )}
                onChange={(_, data) => field.onChange(data)}
              />
            )}
          />
        </FilterSection>

        <FilterSection>
          <Typography variant="h6" gutterBottom>
            Availability
          </Typography>
          <Controller
            name="availability"
            control={control}
            render={({ field }) => (
              <FormGroup>
                {availabilityOptions.map((option) => (
                  <FormControlLabel
                    key={option}
                    control={
                      <Checkbox
                        checked={field.value?.includes(option) || false}
                        onChange={(e) => {
                          const updatedValue = e.target.checked
                            ? [...(field.value || []), option]
                            : (field.value || []).filter(
                                (item) => item !== option
                              );
                          field.onChange(updatedValue);
                        }}
                      />
                    }
                    label={option}
                  />
                ))}
              </FormGroup>
            )}
          />
        </FilterSection>
      </FilterContainer>

      <StyledButton type="submit" variant="contained" color="primary">
        Apply Filters
      </StyledButton>
    </FormContainer>
  );
};
