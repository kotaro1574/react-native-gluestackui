import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";
import { FormControl } from "@/components/ui/form-control";
import { Heading } from "@/components/ui/heading";
import { Input, InputField } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { useState } from "react";

export default function Index() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState<string[]>([]);

  const handleSubmit = () => {
    if (!inputValue) return;
    setTodos([...todos, inputValue]);
    setInputValue("");
  };

  return (
    <Box className="p-4">
      <Heading>TODO作成</Heading>
      <FormControl>
        <Input variant="rounded" className="mt-4">
          <InputField
            placeholder="TODOを入力してください"
            value={inputValue}
            onChange={(e) => setInputValue(e.nativeEvent.text)}
          />
        </Input>
      </FormControl>
      <Box className="mt-4">
        <Button onPress={handleSubmit}>
          <ButtonText>TODOを追加</ButtonText>
        </Button>
      </Box>
      <Box className="mt-4">
        {todos.map((todo, index) => (
          <Box key={index} className="p-2 bg-gray-100 rounded-md">
            <Text>{todo}</Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
