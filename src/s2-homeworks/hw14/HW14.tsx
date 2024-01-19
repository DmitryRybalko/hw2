import React, { useEffect, useState } from "react";
import s2 from "../../s1-main/App.module.css";
import s from "./HW14.module.css";
import axios from "axios";
import SuperDebouncedInput from "./common/c8-SuperDebouncedInput/SuperDebouncedInput";
import { useSearchParams } from "react-router-dom";

/*
 * 1 - дописать функцию onChangeTextCallback в SuperDebouncedInput
 * 2 - дописать функцию sendQuery в HW14
 * 3 - дописать функцию onChangeText в HW14
 * 4 - сделать стили в соответствии с дизайном
 * 5 - добавить HW14 в HW5/pages/JuniorPlus
 * */

const getTechs = (find: string) => {
  return axios
    .get<{ techs: string[] }>(
      "https://samurai.it-incubator.io/api/3.0/homework/test2",
      { params: { find } }
    )
    .then((response) => response.data.techs)
    .catch((e) => {
      alert(e.response?.data?.errorText || e.message);
      return [] as string[];
    });
};

const HW14 = () => {
  const [find, setFind] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [techs, setTechs] = useState<string[]>([]);

  const sendQuery = (value: string) => {
    setLoading(true);
    getTechs(value)
      .then((techArray) => {
        setTechs(techArray); // Store the retrieved array of technologies
        setSearchParams({ find: value }); // Update search parameters in the URL
        setLoading(false); // Complete the loading process
      })
      .catch((error) => {
        setLoading(false); // Ensure loading state is set to false in case of an error
        alert(error.message); // Display an alert with the error message
      });
  };

  const onChangeText = (value: string) => {
    setFind(value);
    // делает студент

    // добавить/заменить значение в квери урла
    // setSearchParams(

    //
    // добавить/заменить значение в квери урла
    const queryParams = new URLSearchParams(window.location.search); // Получить текущие query параметры из URL
    queryParams.set("find", value); // Установить новое значение для параметра 'find'
    const newUrl = `${window.location.pathname}?${queryParams.toString()}`; // Создать новый URL с обновленными параметрами
    window.history.replaceState(null, "", newUrl); // Заменить текущий URL на новый
  };

  useEffect(() => {
    const params = Object.fromEntries(searchParams);
    sendQuery(params.find || "");
    setFind(params.find || "");
  }, []);

  const mappedTechs = techs.map((t) => (
    <div key={t} id={"hw14-tech-" + t} className={s.tech}>
      {t}
    </div>
  ));

  return (
    <div id={"hw14"}>
      <div className={s2.hwTitle}>Homework #14</div>

      <div className={s2.hw}>
        <SuperDebouncedInput
          id={"hw14-super-debounced-input"}
          value={find}
          onChangeText={onChangeText}
          onDebouncedChange={sendQuery}
        />

        <div id={"hw14-loading"} className={s.loading}>
          {isLoading ? "...ищем" : <br />}
        </div>

        {mappedTechs}
      </div>
    </div>
  );
};

export default HW14;