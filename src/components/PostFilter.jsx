import MySelect from "./UI/select/MySelect";
import MyInput from "./UI/input/MyInput";
import React, { useState, useMemo } from "react";
import { debounce } from "lodash";

const PostFilter = ({ setFilter }) => {
  const [value, setValue] = useState("");
  const [select, setSelect] = useState("");

  const test = useMemo(
    () =>
      debounce((select, value) => {
        console.log(select, value);
        setFilter({ sort: select, query: value });
        console.log("123");
      }, 1000),
    []
  );
  const chance = (e) => {
    const target = e.target.value;
    setValue(target);
    test(select, target);
    console.log("log");
  };

  return (
    <div>
      <MyInput
        value={value}
        onChange={(e) => chance(e)}
        placeholder="Поиск..."
      />
      <MySelect
        value={select}
        onChange={(selectedSort) => setSelect(selectedSort)}
        defaultValue="Сортировка"
        options={[
          { value: "title", name: "По названию" },
          { value: "body", name: "По описанию" },
        ]}
      />
    </div>
  );
};

export default PostFilter;
