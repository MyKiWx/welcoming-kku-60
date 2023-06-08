/* eslint-disable react-hooks/exhaustive-deps */
"use client";

/* eslint-disable react/jsx-no-undef */
import {
  Box,
  chakra,
  useCheckbox,
  Image,
  Flex,
  Icon,
  Text,
  HStack,
  VStack,
  useDisclosure,
  Badge,
} from "@chakra-ui/react";
import { a } from "@chakra-ui/checkbox/dist/checkbox-types-a3d7c663";
import React, { useEffect, useState } from "react";

import { FaCheck } from "react-icons/fa";
import { CiCalendar, CiTimer, CiLocationOn } from "react-icons/ci";
import { IoShirtOutline } from "react-icons/io5";
import { v4 as uuidv4 } from "uuid";

/**
 * event type for type of events and for checking
 */

type Props = {
  event_type: "A" | "B" | "C" | "D";
  event_name: string;
  imgCoverRef: string;
  event_start_date: string;
  event_start_time: string;
  event_dressing: string;
  event_location: string;
};

const CustomCheckbox = ({
  event_type,
  event_name,
  imgCoverRef,
  event_start_date,
  event_start_time,
  event_dressing,
  event_location,
}: Props) => {
  const [status, setStatus] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const A = localStorage.getItem(`event_${event_type}_isChecked`);
      if (A === "checked") {
        setStatus(true);
      }
      const ticket_A_code = localStorage.getItem("ticket_A_code");
      if (!ticket_A_code) {
        localStorage.setItem("ticket_A_code", uuidv4());
      }
      const ticket_B_code = localStorage.getItem("ticket_B_code");
      if (!ticket_B_code) {
        localStorage.setItem("ticket_B_code", uuidv4());
      }
      const ticket_C_code = localStorage.getItem("ticket_C_code");
      if (!ticket_C_code) {
        localStorage.setItem("ticket_C_code", uuidv4());
      }
      const ticket_D_code = localStorage.getItem("ticket_D_code");
      if (!ticket_D_code) {
        localStorage.setItem("ticket_D_code", uuidv4());
      }
    }
  }, []);

  const handleCheckboxChange = (
    isChecked: boolean | ((presState: boolean) => boolean)
  ) => {
    setStatus(isChecked);
    if (typeof window !== "undefined") {
      localStorage.setItem(
        `event_${event_type}_isChecked`,
        isChecked ? "checked" : "disable"
      );
    }
  };

  const CheckboxDaft = (props: a | undefined) => {
    const { state, getCheckboxProps, getInputProps, getLabelProps, htmlProps } =
      useCheckbox(props);

    return (
      <chakra.label
        display="flex"
        flexDirection="row"
        alignItems="center"
        gridColumnGap={2}
        boxSizing="content-box"
        borderWidth={state.isChecked ? "2px" : "1px"}
        borderStyle="solid"
        borderColor={state.isChecked ? "blue.500" : "gray.300"}
        borderRadius="2xl"
        cursor={state.isDisabled ? "not-allowed" : "pointer"}
        opacity={state.isDisabled ? 0.3 : 1}
        // w={"full"}
        flex={1}
        p={state.isChecked ? "7px" : "8px"}
        position="relative"
        {...htmlProps}
        zIndex={100}
      >
        <input {...getInputProps()} hidden />
        <Box h={{base: "80px", md: "100px"}} w={{base: "80px", md: "100px"}}>
          <Image
            src={imgCoverRef}
            alt={event_name}
            h="full"
            borderRadius="lg"
          />
        </Box>
        <Flex
          alignItems="center"
          justifyContent="center"
          borderWidth={state.isChecked ? "2px" : "1px"}
          borderStyle="solid"
          borderColor={state.isChecked ? "blue.500" : "gray.300"}
          w={{ base: 4, md: 5 }}
          h={{ base: 4, md: 5 }}
          {...getCheckboxProps()}
          position="absolute"
          top={2}
          right={2}
          borderRadius="full"
        >
          {state.isChecked && (
            <Box
              w={{ base: 4, md: 5 }}
              h={{ base: 4, md: 5 }}
              bg="blue.500"
              borderRadius="full"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Icon
                as={FaCheck}
                color="#fff"
                w={{ base: 2, md: 3 }}
                h={{ base: 2, md: 3 }}
              />
            </Box>
          )}
        </Flex>
        <Box {...getLabelProps()} flex={1} pr={6}>
          <Text
            lineHeight="4"
            fontWeight={600}
            fontSize={{ base: "xs", md: "sm" }}
          >
            {event_name}
          </Text>
          <VStack
            alignItems="flex-start"
            mt={1}
            spacing={0}
            position={"relative"}
          >
            <HStack>
              <Icon as={CiCalendar} />
              <Text fontSize={{ base: "xs", md: "sm" }}>
                {event_start_date}
              </Text>
              <HStack display={{ base: "none", md: "flex" }} ml={2}>
                <Icon as={CiTimer} />
                <Text fontSize={{ base: "xs", md: "sm" }}>
                  {event_start_time}
                </Text>
              </HStack>
            </HStack>
            <HStack display={{ base: "none", md: "flex" }}>
              <Icon as={IoShirtOutline} />
              <Text fontSize={{ base: "xs", md: "sm" }}>{event_dressing}</Text>
            </HStack>
            <HStack>
              <Icon as={CiLocationOn} />
              <Text fontSize={{ base: "xs", md: "sm" }}>{event_location}</Text>
            </HStack>
          </VStack>
        </Box>
      </chakra.label>
    );
  };
  return (
    <Box w={"100%"}>
      <CheckboxDaft
        defaultChecked={status}
        onChange={(e) => handleCheckboxChange(e.target.checked)}
      />
    </Box>
  );
};

export default CustomCheckbox;
