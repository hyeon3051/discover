import EditScreenInfo from "@/components/EditScreenInfo";
import { Center } from "@/components/ui/center";
import { Divider } from "@/components/ui/divider";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { AddIcon, ThreeDotsIcon } from "@/components/ui/icon";
import { StarIcon } from "@/components/ui/icon";
import { HStack } from "@/components/ui/hstack";
import { VStack } from "@/components/ui/vstack";
import { Badge, BadgeText, BadgeIcon } from "@/components/ui/badge";
import { Box } from "@/components/ui/box";
import Review from "@/components/review";
import { Icon, GlobeIcon } from "@/components/ui/icon";
import { ScrollView } from "@/components/ui/scroll-view";
import {
  BottomSheet,
  BottomSheetContent,
  BottomSheetDragIndicator,
  BottomSheetBackdrop,
  BottomSheetPortal,
  BottomSheetTrigger,
} from "@/components/ui/bottomsheet";
import { Textarea, TextareaInput } from "@/components/ui/textarea";
import { Button, ButtonText } from "@/components/ui/button";
export default function Tab2() {
  return (
    <BottomSheet>
      <ScrollView>
        <Box className="w-100 m-2 p-2">
          <HStack space="lg" className=" border-1 px-2 py-1 m-2 w-100">
            <VStack>
              <Avatar size="2xl" className="border-1 shadow-lg">
                <AvatarImage
                  source={{
                    uri: "https://picsum.photos/seed/22/300/300",
                  }}
                  alt="image"
                />{" "}
              </Avatar>
            </VStack>
            <VStack>
              <Box className="my-2">
                <Heading size="lg">돼지국밥</Heading>
              </Box>
              <Text size="md">
                <Text as="span" className="text-green-500">
                  착한 가격
                </Text>{" "}
                업체
              </Text>
              <Text size="md">국토 교통부 인증</Text>
              <Text size="md">리뷰 많음!</Text>
            </VStack>
          </HStack>
          <HStack>
            <HStack space="xs" className="m-2 ml-5">
              <Badge
                size="lg"
                variant="solid"
                className="bg-green-500 rounded-xl text-white"
              >
                <BadgeText className="font-bold text-white">
                  프랜차이즈
                </BadgeText>
              </Badge>{" "}
              <Badge
                size="lg"
                variant="solid"
                className="bg-yellow-500 rounded-xl text-white"
              >
                <BadgeText className="font-bold text-white">바른가격</BadgeText>
              </Badge>{" "}
              <Badge
                size="lg"
                variant="solid"
                className="bg-purple-500 rounded-xl text-white"
              >
                <BadgeText className="font-bold text-white">헬로우</BadgeText>
              </Badge>{" "}
            </HStack>
          </HStack>
          <Divider className="my-0.5" />
          <Center>
            <Heading size="lg" className="m-1">
              리뷰
            </Heading>
          </Center>
          <VStack space="xs" className="m-1">
            <Review
              imageUrl="https://avatar.iran.liara.run/public"
              name="홍길동"
              badgeList={["프랜차이즈", "바른가격", "헬로우"]}
              review="좋아요"
              rating={5}
            />
            <Review
              imageUrl="https://avatar.iran.liara.run/public/boy"
              name="John Doe"
              badgeList={["프랜차이즈", "바른가격", "헬로우"]}
              review="좋아요"
              rating={5}
            />
            <Review
              imageUrl="https://avatar.iran.liara.run/username?username=Scott+Wilson"
              name="Scott Wilson"
              badgeList={["프랜차이즈", "바른가격", "헬로우"]}
              review="좋아요"
              rating={5}
            />
          </VStack>
          <VStack space="xs" className="m-2">
            <Center>
              <BottomSheetTrigger>
                <Icon as={AddIcon} size="lg" />
              </BottomSheetTrigger>
            </Center>
            <Center>
              <Icon as={ThreeDotsIcon} size="lg" />
            </Center>
          </VStack>
          <Divider className="my-0.5" />
        </Box>
        <BottomSheetPortal
          snapPoints={["60%"]}
          backdropComponent={BottomSheetBackdrop}
          handleComponent={BottomSheetDragIndicator}
        >
          <BottomSheetContent className="p-4 flex-col justify-between">
            <Heading size="lg">주문하기</Heading>
            <Divider className="my-1" />
            <VStack space="md" className="m-1">
              <VStack space="md">
                <Text size="md" className="font-bold">
                  별점
                </Text>
                <HStack>
                  <Icon
                    className="text-typography-500"
                    as={StarIcon}
                    size="lg"
                  />{" "}
                  <Icon
                    className="text-typography-500"
                    as={StarIcon}
                    size="lg"
                  />{" "}
                  <Icon
                    className="text-typography-500"
                    as={StarIcon}
                    size="lg"
                  />{" "}
                  <Icon
                    className="text-typography-500"
                    as={StarIcon}
                    size="lg"
                  />{" "}
                  <Icon
                    className="text-typography-500"
                    as={StarIcon}
                    size="lg"
                  />
                </HStack>
              </VStack>
              <VStack space="md">
                <Text size="md" className="font-bold">
                  리뷰 글
                </Text>
                <Textarea className="w-50">
                  <TextareaInput placeholder="리뷰 글을 입력해주세요" />
                </Textarea>
              </VStack>
              <VStack space="md">
                <Text size="md" className="font-bold">
                  키워드 관리
                </Text>
                <Textarea className="w-50">
                  <TextareaInput placeholder="리뷰 글을 입력해주세요" />
                </Textarea>
              </VStack>
            </VStack>
          </BottomSheetContent>
          <HStack space="md" className="my-2 p-4 flex-row justify-end">
            <Button>
              <ButtonText>주문하기</ButtonText>
            </Button>
            <Button variant="outline">
              <ButtonText>취소</ButtonText>
            </Button>
          </HStack>
        </BottomSheetPortal>
      </ScrollView>
    </BottomSheet>
  );
}
