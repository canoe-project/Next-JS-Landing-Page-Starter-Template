import { ProgressCard } from 'components/card/ProgressCard';
import { CommonToggle } from 'components/toggle/CommonToggle';

const Lab = () => {
  return (
    <>
      <ProgressCard
        content={`"미세먼지"란 대기 중에 떠다니거나 흩날려 내려오는 입자상물질인 먼지 중 다음의 흡입성먼지를 말합니다`}
        name="미세먼지 농도"
        value={42}
        index={1}
        unit="㎍/㎥"
        progress={100}
      />
      <CommonToggle name="토글 테스트" value={true}></CommonToggle>
    </>
  );
};

export default Lab;
