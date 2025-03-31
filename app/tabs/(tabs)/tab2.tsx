import { Center } from "@/components/ui/center";
import { Divider } from "@/components/ui/divider";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionContent,
  AccordionTitleText,
  AccordionContentText,
  AccordionIcon,
} from "@/components/ui/accordion";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { ChevronUpIcon, ChevronDownIcon } from "@/components/ui/icon";
import { ScrollView } from "@/components/ui/scroll-view";

import { HStack } from "@/components/ui/hstack";
import { VStack } from "@/components/ui/vstack";
import { Badge, BadgeText, BadgeIcon } from "@/components/ui/badge";
import { Box } from "@/components/ui/box";
import { Button } from "@/components/ui/button";
import { Image } from "@/components/ui/image";
import { router } from "expo-router";

export default function Tab2() {
  return (
    <ScrollView>
      <Box className="w-100 m-2 p-2">
        <HStack space="lg" className=" border-1 px-2 py-1 m-1 w-100">
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
            <Box className="">
              <Heading size="lg">국악</Heading>
            </Box>
            <Text size="md" className="text-typography-400 w-[50%]">
              귀한 음식으로 잔치가 있을 때 내려지는 음식 중 하나였다고 합니다.
            </Text>
          </VStack>
        </HStack>
        <HStack>
          <HStack space="xs" className="m-2 ml-5">
            <Badge
              size="lg"
              variant="solid"
              className="bg-red-500 rounded-xl text-white"
            >
              <BadgeText className="font-bold text-white">프랜차이즈</BadgeText>
            </Badge>{" "}
            <Badge
              size="lg"
              variant="solid"
              className="bg-green-500 rounded-xl text-white"
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
        <VStack className="m-2 p-2">
          <Center>
            <Heading size="lg" className="m-1 mx-2">
              자세한 정보
            </Heading>
          </Center>
          <Accordion
            size="md"
            variant="filled"
            type="single"
            isCollapsible={true}
            isDisabled={false}
            className=" border border-outline-200"
          >
            <AccordionItem value="a">
              <AccordionHeader>
                <AccordionTrigger>
                  {({ isExpanded }) => {
                    return (
                      <>
                        <AccordionTitleText>주변 시설</AccordionTitleText>
                        {isExpanded ? (
                          <AccordionIcon as={ChevronUpIcon} className="ml-3" />
                        ) : (
                          <AccordionIcon
                            as={ChevronDownIcon}
                            className="ml-3"
                          />
                        )}
                      </>
                    );
                  }}
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent>
                <AccordionContentText>
                  To place an order, simply select the products you want,
                  proceed to checkout, provide shipping and payment information,
                  and finalize your purchase.
                </AccordionContentText>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </VStack>
        <Divider className="my-0.5" />
        <Center>
          <Heading size="lg" className="m-2">
            주변 시설
          </Heading>
        </Center>
        <HStack className="m-2 p-2 flex-wrap justify-around" space="xl">
          <AvatarButton
            imageUrl="https://picsum.photos/seed/23/140/140"
            name="주변 시설"
          />
          <AvatarButton
            imageUrl="https://picsum.photos/seed/22/140/140"
            name="주변 시설"
          />
          <AvatarButton
            imageUrl="https://picsum.photos/seed/50/140/140"
            name="주변 시설"
          />
          <AvatarButton
            imageUrl="https://picsum.photos/seed/72/140/140"
            name="주변 시설"
          />
          <AvatarButton
            imageUrl="https://picsum.photos/seed/233/140/140"
            name="주변 시설"
          />
          <AvatarButton
            imageUrl="https://picsum.photos/seed/123/140/140"
            name="주변 시설"
          />
          <AvatarButton
            imageUrl="https://picsum.photos/seed/44/140/140"
            name="주변 시설"
          />
        </HStack>
      </Box>
    </ScrollView>
  );
}

function AvatarButton({ imageUrl, name }: { imageUrl: string; name: string }) {
  return (
    <HStack>
      <VStack space="xs" className="items-center justify-center">
        <Button
          variant="outline"
          onPress={() => router.push("/tabs/tab3")}
          className="w-25 h-25 rounded-full m-0 p-0"
        >
          <Image
            source={{
              uri: imageUrl,
            }}
            alt="image"
            className="rounded-full"
            size="lg"
          />{" "}
        </Button>
        <Text size="md" className="text-typography-500">
          {name}
        </Text>
      </VStack>
      <Divider orientation="vertical" className="my-0.5" />
    </HStack>
  );
}
