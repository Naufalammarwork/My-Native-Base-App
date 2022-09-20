/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  Link,
  Text,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  VStack,
  Box,
  Pressable,
  Image,
  ScrollView,
  AspectRatio,
  Button,
  AlertDialog,
  useDisclose,
  Actionsheet,
} from 'native-base';
import NativeBaseIcon from './src/components/NativeBaseIcon';

// Color Switch Component
function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === 'light'}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === 'light' ? 'switch to dark mode' : 'switch to light mode'
        }
      />
      <Text>Light</Text>
    </HStack>
  );
}
const App = () => {

  const [isOpenDialog, setIsOpenDialog] = React.useState(false);

  const onCloseDialog = () => setIsOpenDialog(false);

  const cancelRef = React.useRef(null);
  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclose();

  const ImageRatio = () => {
    return (
      <VStack>
        <HStack justifyContent={"space-around"}>
          <AspectRatio
            borderColor={'red.100'}
            borderWidth={3}
            ratio={{
              base: 4 / 5,
              md: 12 / 13
            }} height={{
              base: 200,
              md: 400
            }}>
            <Image resizeMode="cover"
              source={{
                uri: "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg"
              }}
              alt="Picture of a Flower" />
          </AspectRatio>
          <AspectRatio
            borderColor={'red.100'}
            borderWidth={3}
            ratio={{
              base: 4 / 5,
              md: 12 / 13
            }} height={{
              base: 200,
              md: 400
            }}>
            <Image resizeMode="cover"
              source={{
                uri: "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg"
              }}
              alt="Picture of a Flower" />
          </AspectRatio>
        </HStack>
        <Button
          backgroundColor={"secondary.400"}
          my={4}
          onPress={onOpen}>Press Me Action Sheet</Button>
      </VStack >
    );
  };
  function ActionSheetView() {

    return <Center>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <Box w="100%" h={60} px={4} justifyContent="center">
            <Text fontSize="18" color="gray.500" _dark={{
              color: "gray.300"
            }}>
              Albums
            </Text>
          </Box>
          <Actionsheet.Item>Delete</Actionsheet.Item>
          <Actionsheet.Item isDisabled>Share</Actionsheet.Item>
          <Actionsheet.Item>Play</Actionsheet.Item>
          <Actionsheet.Item>Favourite</Actionsheet.Item>
          <Actionsheet.Item>Cancel</Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </Center>;
  }
  const AlertDialogPre = () => {
    return <Center>
      <AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpenDialog} onClose={onCloseDialog}>
        <AlertDialog.Content>
          <AlertDialog.CloseButton />
          <AlertDialog.Header>Remind You!</AlertDialog.Header>
          <AlertDialog.Body>
            This will remind all data relating to you. This action cannot be
            reversed.
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <Button.Group space={2}>
              <Button variant="unstyled" colorScheme="coolGray" onPress={onClose} ref={cancelRef}>
                Cancel
              </Button>
              <Button colorScheme="primary" onPress={onClose}>
                Remind Me
              </Button>
            </Button.Group>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    </Center>;
  };
  return (
    <NativeBaseProvider>
      <AlertDialogPre />
      <ActionSheetView />
      <ScrollView
        _dark={{ bg: 'blueGray.900' }}
        _light={{ bg: 'blueGray.50' }}
        px={4}
        flex={1}>
        <Center
          px={4}
          flex={1}>
          <VStack space={5} alignItems="center">
            <NativeBaseIcon />
            <Heading size="lg">Welcome to NativeBase</Heading>
            <HStack space={2} alignItems="center">
              <Text>Edit</Text>
              <Box
                px={2}
                py={1}
                _dark={{ bg: "blueGray.800" }}
                _light={{ bg: "blueGray.200" }}
              // _text={{color:"coolGray.900"}}
              >
                App.js
              </Box>
              <Text>and save to reload.</Text>
            </HStack>
            <Link href="https://docs.nativebase.io" isExternal>
              <Text color="primary.500" underline fontSize={'xl'}>
                Learn NativeBase
              </Text>
            </Link>
            <ToggleDarkMode />
          </VStack>
        </Center>

        <Box bg="primary.600" py="4" px="4" borderRadius="5" rounded="md"
          my={8}
          width={375}
          maxWidth="100%"
        >
          <HStack justifyContent="space-between">
            <Box justifyContent="space-between">
              <VStack space="2">
                <Text fontSize="sm" color="white">
                  Today @ 9PM
                </Text>
                <Text color="white" fontSize="xl">
                  Let's talk about avatar!
                </Text>
              </VStack>
              <Pressable rounded="xs" bg="primary.400" alignSelf="flex-start" py="1" px="3"
                onPress={() => setIsOpenDialog(!isOpen)}>
                <Text textTransform="uppercase" fontSize="sm" fontWeight="bold" color="white">
                  Remind me
                </Text>
              </Pressable>

            </Box>
            <Image source={{
              uri: 'https://media.vanityfair.com/photos/5ba12e6d42b9d16f4545aa19/3:2/w_1998,h_1332,c_limit/t-Avatar-The-Last-Airbender-Live-Action.jpg'
            }} alt="Aang flying and surrounded by clouds" height="100" rounded="full" width="100" />
          </HStack>
        </Box>
        <ImageRatio />
      </ScrollView>
    </NativeBaseProvider>
  );
};
export default App;
