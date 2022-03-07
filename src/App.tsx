import NoRequest from "components/atoms/NoRequest";
import HeaderNav from "components/containers/HeaderNav";
import IsConsult from "components/containers/IsConsult";
import RequestCard from "components/domains/RequestCard";
import FilterButton from "components/filter/FilterButton";
import ResetButton from "components/filter/ResetButton";
import React, { useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { fetchData, Request } from "store/request";
import store from "store/store";
import styled from "styled-components";
import { API_URL } from "../src/constants/index";

type RootState = ReturnType<typeof store.getState>;

function App() {
  const { filteredRequests, methods, materials } = useSelector(
    (state: RootState) => state.requests
  );
  const dispatch = useDispatch();

  async function getData() {
    const { requests: dataRequests } = await fetch(API_URL).then((res) =>
      res.json()
    );
    dispatch(fetchData(dataRequests as Request[]));
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <Provider store={store}>
      <Wrap>
        <HeaderNav />
        <Body>
          <TitleSection>
            <h1>들어온 요청</h1>
            <span>파트너님에게 딱 맞는 요청서를 찾아보세요.</span>
          </TitleSection>
          <ControllerSection>
            <div className="controller">
              <FilterButton name="가공방식" options={["밀링", "선반"]} />
              <FilterButton
                name="재료"
                options={["알루미늄", "탄소강", "구리", "합금강", "강철"]}
              />
              {(methods.length > 0 || materials.length > 0) && <ResetButton />}
            </div>
            <div className="controller">
              <IsConsult />
            </div>
          </ControllerSection>
          {filteredRequests.length > 0 ? (
            <ContentSection>
              {filteredRequests.map((filteredRequest) => (
                <RequestCard
                  key={filteredRequest.id}
                  initialState={filteredRequest}
                />
              ))}
            </ContentSection>
          ) : (
            <NoRequest />
          )}
        </Body>
      </Wrap>
    </Provider>
  );
}

export default App;

const Wrap = styled.div`
  overflow-x: hidden;
`;

const Body = styled.div`
  max-width: 1130px;
  width: 100%;
  height: 100%;
  margin: 0 auto;

  @media only screen and (max-width: 360px) {
    width: 100%;
    margin: 0 20px;
  }
`;

const TitleSection = styled.div`
  margin-top: 40px;

  h1 {
    font-size: ${({ theme }) => theme.fontSize.xLarge};
    line-height: 1.5rem;
    font-weight: bold;
  }

  span {
    line-height: 1.5rem;
  }
`;

const ControllerSection = styled.div`
  margin: 32px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .controller {
    display: flex;
    align-items: center;
  }

  .filterBtn {
    margin-right: 8px;
  }

  @media only screen and (max-width: 360px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    .controller:first-child {
      margin-bottom: 20px;
    }
  }
`;

const ContentSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 16px;
  margin-bottom: 60px;

  @media only screen and (max-width: 360px) {
    grid-template-columns: repeat(1, 1fr);
    margin: 0 auto;
  }
`;
