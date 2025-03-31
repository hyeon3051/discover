import EditScreenInfo from "@/components/EditScreenInfo";
import { Center } from "@/components/ui/center";
import { Divider } from "@/components/ui/divider";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import Mapbox, { MarkerView } from "@rnmapbox/maps";
import { Image } from "@/components/ui/image";
Mapbox.setAccessToken(
  "sk.eyJ1IjoiaHllb24zMDUxIiwiYSI6ImNtOG55N3Z1YTAzbG8ya3NidGc1OWtleXMifQ.V7UZ8KH21RuPGUbII_gEEw"
);

export default function Home() {
  return (
    <Center className="flex-1">
      <Mapbox.MapView
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <Mapbox.MarkerView coordinate={[126.917959, 37.552265]}>
          <Image
            source={{
              uri: "https://gluestack.github.io/public-blog-video-assets/john.png",
            }}
            alt="image"
            className="w-10 h-10 rounded-full"
          />
        </Mapbox.MarkerView>
      </Mapbox.MapView>
    </Center>
  );
}
