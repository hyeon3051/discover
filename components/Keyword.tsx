import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Avatar, AvatarFallbackText, AvatarImage } from "./ui/avatar";
import { HStack } from "@/components/ui/hstack";
import { VStack } from "@/components/ui/vstack";
import {
  GlobeIcon,
  Icon,
  ThreeDotsIcon,
  MenuIcon,
  AddIcon,
  PlayIcon,
  SettingsIcon,
  CloseIcon,
} from "@/components/ui/icon";
import { Badge, BadgeText, BadgeIcon } from "./ui/badge";
import { Divider } from "./ui/divider";
import { Image } from "./ui/image";
import { router } from "expo-router";
import { Menu, MenuItem, MenuItemLabel } from "@/components/ui/menu";
import { Button, ButtonText } from "@/components/ui/button";

export default function KeyWord({
  badgeList,
  distance,
  name,
  description,
  appearanceCount,
  imageUrl,
}: {
  badgeList: string[];
  distance: number;
  name: string;
  description: string;
  appearanceCount: number;
  imageUrl: string;
}) {
  const generateRandomColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };
  return (
    <>
      <HStack
        space="xl"
        className="item-center justify-between border-1 px-2 m-1 w-100"
      >
        <VStack>
          <Button
            variant="outline"
            onPress={() => router.push("/tabs/tab2")}
            className="w-25 h-25 rounded-full m-0 p-0 border-0"
          >
            <Image
              source={{
                uri: imageUrl,
              }}
              alt="image"
              className="rounded-full"
              size="xl"
            />{" "}
          </Button>
        </VStack>
        <VStack space="xs" className="w-[50%]">
          <Heading size="lg">{name}</Heading>
          <Text size="md" className="text-typography-500">
            {description}
          </Text>
          <HStack space="xs">
            {badgeList.map((badge) => (
              <Badge
                size="md"
                variant="solid"
                className="rounded-xl"
                style={{ backgroundColor: generateRandomColor() }}
              >
                <BadgeText className="font-bold text-white">{badge}</BadgeText>
              </Badge>
            ))}
          </HStack>
          <Text size="md" className="text-typography-300">
            {distance}km 떨어짐
          </Text>
        </VStack>
        <VStack className="ml-auto items-center justify-between">
          <MenuExample />
          <Badge
            size="lg"
            variant="solid"
            action="muted"
            className="bg-red-500 rounded-xl text-white"
          >
            <BadgeText className="font-bold text-white">
              {appearanceCount}
            </BadgeText>
          </Badge>{" "}
        </VStack>
      </HStack>
      <Divider className="my-0.5" />
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
        <MenuItemLabel size="sm">Add account</MenuItemLabel>
      </MenuItem>
      <MenuItem key="Community" textValue="Community">
        <Icon as={GlobeIcon} size="sm" className="mr-2" />
        <MenuItemLabel size="sm">Community</MenuItemLabel>
      </MenuItem>
      <MenuItem key="Plugins" textValue="Plugins">
        <Icon as={PlayIcon} size="sm" className="mr-2" />
        <MenuItemLabel size="sm">Plugins</MenuItemLabel>
      </MenuItem>
      <MenuItem key="Settings" textValue="Settings">
        <Icon as={CloseIcon} size="sm" className="mr-2" />
        <MenuItemLabel size="sm">취소</MenuItemLabel>
      </MenuItem>
    </Menu>
  );
}
