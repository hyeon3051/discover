import EditScreenInfo from "@/components/EditScreenInfo";
import { Center } from "@/components/ui/center";
import { Divider } from "@/components/ui/divider";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import KeyWord from "@/components/Keyword";
import { HStack } from "@/components/ui/hstack";
import { VStack } from "@/components/ui/vstack";
import { Box } from "@/components/ui/box";
import { Input, InputField } from "@/components/ui/input";
import { SliderFilledTrack, SliderThumb } from "@/components/ui/slider";
import { SliderTrack } from "@/components/ui/slider";
import { Slider } from "@/components/ui/slider";
import { ScrollView } from "@/components/ui/scroll-view";

export default function Tab2() {
  return (
    <>
      <Input className="mx-2 my-1 p-1">
        <InputField placeholder="검색어를 입력해주세요" />
      </Input>
      <ScrollView className="m-2 p-1 flex-1">
        <VStack space="xs">
          <KeyWord
            badgeList={["헬로우", "프랜차이즈", "바른가격"]}
            distance={0.78}
            name="돼지국밥"
            description={
              "귀한 음식으로 잔치가 있을 때 내려지는 음식 중 하나였다고 합니다."
            }
            appearanceCount={12}
            imageUrl="https://picsum.photos/seed/22/300/300"
          />
          <KeyWord
            badgeList={["전통문화", "문화장소", "음악"]}
            distance={1.25}
            name="국악"
            description={
              "국악은 대한민국의 전통문화로, 대표적인 문화장소입니다."
            }
            appearanceCount={2}
            imageUrl="https://picsum.photos/seed/26/300/300"
          />
          <KeyWord
            badgeList={["카페", "커피", "디저트"]}
            distance={2.1}
            name="카페"
            description={
              "카페는 커피와 디저트를 제공하는 장소로, 소비자들이 쉽게 찾을 수 있는 장소입니다."
            }
            appearanceCount={22}
            imageUrl="https://picsum.photos/seed/27/300/300"
          />
          <KeyWord
            badgeList={["로컬크리에이터", "브랜드", "디자이너"]}
            distance={3.2}
            name="디자이너"
            description={"디자이너는 소비자들이 쉽게 찾을 수 있는 장소입니다."}
            appearanceCount={1}
            imageUrl="https://picsum.photos/seed/32/300/300"
          />
          <KeyWord
            badgeList={["카페", "커피", "디저트"]}
            distance={3.2}
            name="디자이너"
            description={"디자이너는 소비자들이 쉽게 찾을 수 있는 장소입니다."}
            appearanceCount={1}
            imageUrl="https://picsum.photos/seed/33/300/300"
          />
        </VStack>
        <SliderComponent />
      </ScrollView>{" "}
    </>
  );
}

function SliderComponent() {
  return (
    <Slider
      defaultValue={30}
      size="md"
      className="m-2 p-1"
      orientation="horizontal"
      isDisabled={false}
      isReversed={false}
    >
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <SliderThumb />
    </Slider>
  );
}
