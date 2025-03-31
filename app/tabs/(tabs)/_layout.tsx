import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Icon, SettingsIcon } from "@/components/ui/icon";
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={18} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
        headerRight: () => (
          <Button variant="link" size="sm" className="rounded-full m-2 p-0">
            <Icon as={SettingsIcon} size="lg" />
          </Button>
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "지도",
          tabBarIcon: ({ color }) => <TabBarIcon name="map" color={color} />,
        }}
      />

      <Tabs.Screen
        name="tab1"
        options={{
          title: "주변",
          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
        }}
      />
      <Tabs.Screen
        name="tab2"
        options={{
          title: "자세히",
          tabBarIcon: ({ color }) => <TabBarIcon name="book" color={color} />,
        }}
      />
      <Tabs.Screen
        name="tab3"
        options={{
          title: "매장",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="shopping-cart" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
