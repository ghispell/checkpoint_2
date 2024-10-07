import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Grid,
} from "@mui/material";
import { useMutation } from "@apollo/client";
import { ADD_COUNTRY, GET_ALL_COUNTRIES } from "@/graphql/queries";

const AddCountry = () => {
  const [name, setName] = useState("");
  const [emoji, setEmoji] = useState("");
  const [code, setCode] = useState("");

  const [addCountryMutation] = useMutation(ADD_COUNTRY, {
    refetchQueries: [{ query: GET_ALL_COUNTRIES }],
    awaitRefetchQueries: true,
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    addCountryMutation({
      variables: {
        data: {
          name,
          emoji,
          code,
        },
      },
    });
  };

  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        justifyContent="space-between"
        flexDirection={{ xs: "column", sm: "row" }}
        alignItems="center"
        gap={2}
      >
        <Box flex={1}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={{ backgroundColor: "white" }}
          />
        </Box>
        <Box flex={1}>
          <TextField
            label="Emoji"
            variant="outlined"
            fullWidth
            margin="normal"
            value={emoji}
            onChange={(e) => setEmoji(e.target.value)}
            sx={{ backgroundColor: "white" }}
          />
        </Box>
        <Box flex={1}>
          <TextField
            label="Code"
            variant="outlined"
            fullWidth
            margin="normal"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            sx={{ backgroundColor: "white" }}
          />
        </Box>
        <Box>
          <Button
            type="submit"
            variant="contained"
            onClick={handleSubmit}
            sx={{ width: 40, height: 40, backgroundColor: "#f7126b" }}
          >
            Add
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default AddCountry;
