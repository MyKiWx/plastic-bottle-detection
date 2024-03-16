/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";

import { Button } from "@chakra-ui/button";
import { Icon } from "@chakra-ui/icon";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  ListItem,
  OrderedList,
  Text,
  VStack,
} from "@chakra-ui/layout";

import { useEffect, useRef, useState } from "react";

import axios from "axios";

import { PiUploadBold } from "react-icons/pi";
type Props = {};

export interface DataType {
  time: number;
  image: Image;
  predictions: Prediction[];
}

export interface Image {
  width: number;
  height: number;
}

export interface Prediction {
  x: number;
  y: number;
  width: number;
  height: number;
  confidence: number;
  class: string;
  class_id: number;
  detection_id: string;
}
const Home = (props: Props) => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const inputFile = useRef<HTMLInputElement>(null);
  const [data, setData] = useState<DataType | undefined>(undefined);
  const [price, setPrice] = useState(0);

  const loadImageBase64 = (file: Blob | null) => {
    if (file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });
    }
  };

  const fileSelectHandler = (file: File | null) => {
    if (file) {
      // handle the file here
      console.log("Selected file:", file);
      setSelectedImage(file);
    }
  };

  const bottleDetection = async () => {
    const image = await loadImageBase64(selectedImage);

    axios({
      method: "POST",
      url: "https://detect.roboflow.com/plastic-bottle-identifier/6",
      params: {
        api_key: process.env.NEXT_PUBLIC_API_KEY,
      },
      data: image,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then(function (response) {
        setData(response.data);
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error.message);
      });
  };

  const onButtonClick = () => {
    if (inputFile.current) {
      inputFile.current.click();
    }
  };

  useEffect(() => {
    if (selectedImage) {
      bottleDetection();
    }
  }, [selectedImage]);

  useEffect(() => {
    if (data) {
      setPrice(data.predictions.length * 7);
    }
  }, [data]);
  return (
    <div>
      <Box
        px={8}
        py={4}
        borderRight="2px solid black"
        borderBottom="2px solid black"
        sx={{
          h: "calc(100dvh - 64px)",
          w: "calc(100dvw - 200px)",
        }}
      >
        <Box bg="white" border="2px solid black" p={4}>
          <Box w={20} h={4} mt={0} bg="#ffec99" border="2px solid black" />
          <Box w="full" h={8} mt={2} bg="#ffd8a8" border="2px solid black" />
          <Box w="full" h={16} mt={4} bg="#99e9f2" border="2px solid black" />
          <Grid w="full" mt={4} templateColumns="repeat(5, 1fr)" gap={6}>
            <GridItem w="full" colSpan={1}>
              <Box
                w="full"
                h={32}
                mt={0}
                bg="#96f2d7"
                border="2px solid black"
              />
              <Box
                w="full"
                // h={32}
                py={2}
                mt={2}
                px={2}
                bg="white"
                border="2px solid black"
              >
                <Text fontSize="xs" fontWeight="bold" textAlign="center">
                  Upload Image or a Video File
                </Text>
                <Box
                  w="full"
                  // h={24}
                  py={4}
                  mt={2}
                  border="2px dashed"
                  borderColor="blackAlpha.300"
                  borderRadius={2}
                  bg="gray.50"
                  as={VStack}
                >
                  <Text fontSize="xs" color="gray.600" fontWeight="semibold">
                    Drop files here or
                  </Text>
                  <Button
                    leftIcon={<Icon as={PiUploadBold} />}
                    size="xs"
                    bg="white"
                    border="1px solid"
                    borderColor="gray.300"
                    px={3}
                    py={4}
                    mt={1}
                    _hover={{
                      bg: "blackAlpha.100",
                      borderColor: "gray.400",
                    }}
                    onClick={onButtonClick}
                  >
                    Select File
                  </Button>
                  <input
                    type="file"
                    id="file"
                    ref={inputFile}
                    style={{ display: "none" }}
                    onChange={(event) =>
                      fileSelectHandler(
                        event.target.files ? event.target.files[0] : null
                      )
                    }
                  />
                </Box>
              </Box>
              <Box
                w="full"
                h={20}
                mt={2}
                bg="#eaddd7"
                border="2px solid black"
              />
            </GridItem>
            <GridItem w="full" colSpan={3}>
              <Box
                w="full"
                h="full"
                mt={0}
                bg="white"
                border="2px solid black"
                as={Flex}
                justifyContent="center"
                alignItems="center"
              >
                {selectedImage && (
                  <div>
                    <img
                      alt="not found"
                      width={"500px"}
                      src={URL.createObjectURL(selectedImage)}
                    />
                    <br />
                  </div>
                )}
              </Box>
            </GridItem>
            <GridItem w="full" colSpan={1}>
              <Box
                w="full"
                h={32}
                mt={0}
                bg="#eebefa"
                border="2px solid black"
              />
              <Box
                w="full"
                h={60}
                mt={2}
                bg="white"
                border="2px solid black"
                px={2}
                py={2}
              >
                <Text fontSize="sm" fontWeight="semibold">
                  Bottle list :
                </Text>
                <OrderedList pl={4}>
                  {data &&
                    data.predictions.map((currentValue, index, arr) => {
                      return (
                        <>
                          <ListItem
                            key={index}
                            style={{
                              fontSize: "12px",
                            }}
                          >
                            {currentValue.class}
                          </ListItem>
                        </>
                      );
                    })}
                </OrderedList>
                <Text fontSize="sm" fontWeight="semibold" mt={4}>
                  Price : {price}
                </Text>
              </Box>
            </GridItem>
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default Home;
