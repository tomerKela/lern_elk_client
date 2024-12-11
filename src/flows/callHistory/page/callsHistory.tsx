import React, { useEffect, useMemo } from "react";
import { List } from "../../../common/components/list";
import { PastCallActionButtons } from "../components/notificationActionButtons";
import {
  convertCallHistoryToListDetails,
  useCallHistoryState,
} from "../data/callsHistoryState";
import { myTopicsMock } from "../mock/callsHistoryMock";
import { NiceBackground } from "../../../common/components/niceBackgruond/component/niceBackground";

export const CallsHistoryPage: React.FC = () => {
  const { callHistory, setCallHistory } = useCallHistoryState();

  useEffect(() => {
    setCallHistory(myTopicsMock);
  }, [setCallHistory]);

  const listData = useMemo(() => {
    const result = convertCallHistoryToListDetails(callHistory);
    return result;
  }, [callHistory, convertCallHistoryToListDetails]);

  return (
    <>
      <NiceBackground />
      <List
        data={listData}
        header="Calls History"
        ActionButtons={PastCallActionButtons}
      />
    </>
  );
};
