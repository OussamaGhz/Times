import React from "react";
import {
  MultiSelector,
  MultiSelectorContent,
  MultiSelectorInput,
  MultiSelectorItem,
  MultiSelectorList,
  MultiSelectorTrigger,
} from "@/components/ui/multi-selector";

type OPTIONS = {
  value: string;
  label: string;
};

interface MultipleSelectorDataProps {
  options: OPTIONS[];
  onValuesChange: (values: string[]) => void;
}

const MultipleSelectorData = ({
  options,
  onValuesChange,
}: MultipleSelectorDataProps) => {
  const [value, setValue] = React.useState<string[]>([]);

  const handleValuesChange = (newValues: string[]) => {
    setValue(newValues);
    onValuesChange(newValues); // Call the callback function to send the values back to the parent
  };

  return (
    <MultiSelector
      values={value}
      onValuesChange={handleValuesChange}
      loop={false}
    >
      <MultiSelectorTrigger className="w-full h-[52px] p-0 m-0">
        <MultiSelectorInput className="h-full" />
      </MultiSelectorTrigger>
      <MultiSelectorContent>
        <MultiSelectorList>
          {options.map((option, i) => (
            <MultiSelectorItem key={i} value={option.value}>
              {option.label}
            </MultiSelectorItem>
          ))}
        </MultiSelectorList>
      </MultiSelectorContent>
    </MultiSelector>
  );
};

export default MultipleSelectorData;
