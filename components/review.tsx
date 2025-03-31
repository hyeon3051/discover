import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
  AvatarBadge,
} from "./ui/avatar";
import { HStack } from "@/components/ui/hstack";
import { VStack } from "@/components/ui/vstack";
import { GlobeIcon, Icon, StarIcon, ThreeDotsIcon } from "@/components/ui/icon";
import { Badge, BadgeText } from "./ui/badge";
import { Divider } from "./ui/divider";
import { Box } from "./ui/box";
import { Center } from "./ui/center";
import { Menu, MenuItem, MenuItemLabel } from "@/components/ui/menu";
import { Button } from "@/components/ui/button";
import { AddIcon, CloseIcon, MenuIcon, PlayIcon } from "@/components/ui/icon";

export default function Review({
  imageUrl,
  name,
  badgeList,
  review,
  rating,
}: {
  imageUrl: string;
  name: string;
  badgeList: string[];
  review: string;
  rating: number;
}) {
  const generateRandomColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };
  return (
    <>
      <HStack space="md" className="item-center border-1 p-1 m-1 border-1">
        <VStack>
          <Avatar size="xl" className="border-1 shadow-lg">
            <AvatarImage
              source={{
                uri: imageUrl,
              }}
              alt="image"
            />{" "}
            <AvatarBadge className="bg-green-500 rounded-full border-0 flex items-center justify-center">
              <Text className="text-white font-bold ">3</Text>
            </AvatarBadge>
          </Avatar>
        </VStack>
        <VStack space="xs">
          <Heading size="md">{name}</Heading>
          <HStack space="xs" className="mt-1">
            {badgeList.map((badge) => (
              <Badge
                size="sm"
                variant="solid"
                className=" rounded-xl text-white"
                style={{ backgroundColor: generateRandomColor() }}
              >
                <BadgeText className="text-white font-bold">{badge}</BadgeText>
              </Badge>
            ))}
          </HStack>
          <Text size="sm" className="font-light w-[60%] text-wrap break-words">
            {review}
          </Text>
          <Text size="sm" className="text-typography-500">
            #맛집 #다음에도올듯 #푸짐함 #인테리어굿
          </Text>
          <HStack>
            <Icon className="text-typography-500" as={StarIcon} size="lg" />
            <Icon className="text-typography-500" as={StarIcon} size="lg" />
            <Icon className="text-typography-500" as={StarIcon} size="lg" />
            <Icon className="text-typography-500" as={StarIcon} size="lg" />
            <Icon className="text-typography-500" as={StarIcon} size="lg" />
          </HStack>
        </VStack>
        <VStack className="justify-between ml-auto items-center">
          <MenuExample />
          <Center>
            <Badge
              size="sm"
              variant="solid"
              action="muted"
              className="rounded-xl text-white"
            >
              <BadgeText>3일전</BadgeText>
            </Badge>
          </Center>
        </VStack>
      </HStack>
    </>
  );
}

function MenuExample() {
  return (
    <Menu
      placement="bottom"
      offset={-90}
      trigger={({ ...triggerProps }) => {
        return (
          <Button {...triggerProps} className="p-0 m-0 border-0 bg-transparent">
            <Icon as={MenuIcon} size="xl" />
          </Button>
        );
      }}
    >
      <MenuItem key="Add account" textValue="Add account">
        <Icon as={AddIcon} size="sm" className="mr-2" />
        <MenuItemLabel size="sm">신고</MenuItemLabel>
      </MenuItem>
      <MenuItem key="Community" textValue="Community">
        <Icon as={GlobeIcon} size="sm" className="mr-2" />
        <MenuItemLabel size="sm">좋아요</MenuItemLabel>
      </MenuItem>
      <MenuItem key="Plugins" textValue="Plugins">
        <Icon as={PlayIcon} size="sm" className="mr-2" />
        <MenuItemLabel size="sm">취소</MenuItemLabel>
      </MenuItem>
    </Menu>
  );
}
