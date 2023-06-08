/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import {
  Box,
  Button,
  Flex,
  HStack,
  useDisclosure,
  VStack,
  Text,
  Divider,
  Icon,
  Switch,
  Checkbox,
} from "@chakra-ui/react";

import "./page.module.css";
import HeaderContent from "@/components/HeaderContent";
import { GiTicket } from "react-icons/gi";
import { BsCloudDownload, BsFillCheckCircleFill } from "react-icons/bs";
import { FaFileDownload } from "react-icons/fa";
import { useEffect, useState } from "react";
import TicketA from "@/components/TicketA";
import TicketB from "@/components/TicketB";
import TicketC from "@/components/TicketC";
import TicketD from "@/components/TicketD";
import { useLoaded } from "@/hooks/Loaded";
import { useCountdown } from "@/hooks/useCountdown";

type Props = {
  activeStep: number;
  goToNext(): void;
  goToPrevious(): void;
};

const DownloadETickets = ({ activeStep, goToNext, goToPrevious }: Props) => {
  // ANCHOR : Control about steps
  const {
    isOpen: stepIsOpen,
    onOpen: stepOnOpen,
    onClose: stepOnClose,
  } = useDisclosure();
  const Indicator = () => {
    return (
      <HStack display={activeStep == 3 ? "none" : "flex"}>
        {[1, 2, 3, 4, 5].map((i, _) => (
          <Box
            w={{ base: 2, md: 6 }}
            h={{ base: 2, md: 1 }}
            bg={activeStep >= i ? "blue.500" : "gray.200"}
            borderRadius="full"
            key={_}
          />
        ))}
      </HStack>
    );
  };

  // ANCHOR : Ticket checked
  const [event_A_isChecked, setEvent_A_isChecked] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      const A = localStorage.getItem(`event_A_isChecked`);
      if (A === "checked") {
        return true;
      }
    }
    return false;
  });
  const [event_B_isChecked, setEvent_B_isChecked] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      const A = localStorage.getItem(`event_B_isChecked`);
      if (A === "checked") {
        return true;
      }
    }
    return false;
  });
  const [event_C_isChecked, setEvent_C_isChecked] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      const A = localStorage.getItem(`event_C_isChecked`);
      if (A === "checked") {
        return true;
      }
    }
    return false;
  });
  const [event_D_isChecked, setEvent_D_isChecked] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      const A = localStorage.getItem(`event_D_isChecked`);
      if (A === "checked") {
        return true;
      }
    }
    return false;
  });

  const [ticket_A_isDownload, setTicket_A_isDownload] =
    useState<boolean>(false);
  const [ticket_B_isDownload, setTicket_B_isDownload] =
    useState<boolean>(false);
  const [ticket_C_isDownload, setTicket_C_isDownload] =
    useState<boolean>(false);
  const [ticket_D_isDownload, setTicket_D_isDownload] =
    useState<boolean>(false);

  const handleDownloadTicketA = () => {
    setTicket_A_isDownload(true);
  };
  const handleDownloadTicketB = () => {
    setTicket_B_isDownload(true);
  };
  const handleDownloadTicketC = () => {
    setTicket_C_isDownload(true);
  };
  const handleDownloadTicketD = () => {
    setTicket_D_isDownload(true);
  };

  const handleDownloadTicketAll = () => {
    if (event_A_isChecked) {
      setTicket_A_isDownload(true);
    }
    if (event_B_isChecked) {
      setTicket_B_isDownload(true);
    }
    if (event_C_isChecked) {
      setTicket_C_isDownload(true);
    }
    if (event_D_isChecked) {
      setTicket_D_isDownload(true);
    }
  };

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     const ticket_start_time = localStorage.getItem("ticket_start_time");
  //     const ticket_end_time = localStorage.getItem("ticket_start_time");
  //     if (!ticket_start_time && !ticket_end_time) {
  //       const currentTimeStart = new Date();
  //       const currentTimeEnd = new Date();
  //       currentTimeStart.setMinutes(currentTimeStart.getMinutes());
  //       currentTimeEnd.setMinutes(currentTimeEnd.getMinutes() + 15);
  //       localStorage.setItem(
  //         "ticket_start_time",
  //         JSON.stringify(currentTimeStart)
  //       );
  //       localStorage.setItem("ticket_end_time", JSON.stringify(currentTimeEnd));
  //     }
  //   }
  // }, []);

  // const [ticket_start_time, setTicket_start_time] = useState<Date>(() => {
  //   if (typeof window !== "undefined") {
  //     const A = localStorage.getItem(`ticket_start_time`);
  //     if (A) {
  //       return new Date(JSON.parse(A));
  //     }
  //   }
  //   return new Date();
  // });
  // const [ticket_end_time, setTicket_end_time] = useState<Date>(() => {
  //   if (typeof window !== "undefined") {
  //     const A = localStorage.getItem(`ticket_end_time`);
  //     if (A) {
  //       return new Date(JSON.parse(A));
  //     }
  //   }
  //   return new Date();
  // });
  // Output the result in an element with id="demo"
  // const countDown = document.getElementById("countDown");

  // // const loaded = useLoaded()

  // const [distance, setDistance] = useState( ticket_end_time.getTime() - ticket_start_time.getTime())

  // function counter() {
  //   const count = setInterval(() => {
  //     setDistance(distance - 1 )
  //     // let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  //     // let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  //     if (countDown !== null) {
  //       // countDown.innerHTML = minutes + " นาที " + seconds + " วินาที";
  //       console.log(distance)
  //       // console.log(minutes)
  //       if (distance < 0) {
  //         clearInterval(count);
  //         countDown.innerHTML = "EXPIRED";
  //       }
  //     }
  //   }, 1000);
  // }
  // useEffect(() => {
  //   setInterval(() => {
  //     setDistance(distance - 1 )
  //   }, 1000)
  // }, []);

  // useEffect(() => {
  //   console.log(distance)
  // }, [distance]);

  // const [days, hours, minutes, seconds] = useCountdown({
  //   ticket_start_time: ticket_start_time,
  //   ticket_end_time: ticket_end_time,
  // });

  // console.log(seconds);

  return (
    <>
      <VStack h={"100%"} justifyContent="space-between">
        <HeaderContent
          title={"ดาวน์โหลด E-Ticket"}
          title2={"เพื่อเข้าร่วมกิจกรรม"}
        />
        <VStack
          mt={{ base: 4, md: 4 }}
          spacing={4}
          flex={1}
          justifyContent={"space-between"}
          w={"100%"}
        >
          {/* ANCHOR : main sub block */}
          <VStack w={"100%"} spacing={6}>
            <HStack
              w={"100%"}
              p={4}
              borderRadius="xl"
              justifyContent={"space-between"}
              transition="all 200ms ease"
              borderWidth={1}
              borderStyle={"solid"}
              borderColor="gray.200"
              display={event_A_isChecked ? "flex" : "none"}
            >
              <VStack
                h={"100%"}
                justifyContent={"center"}
                pl={2}
                pr={3}
                display={{ base: "none", md: "flex" }}
              >
                <Icon as={GiTicket} fontSize={"3xl"} />
              </VStack>
              <Text>
                กิจกรรมโฮมมั่นขวัญแก่น ผูกแขนนักศึกษาใหม่ KKU BYE SEE 2023
              </Text>
              <VStack h={"100%"} justifyContent={"center"} px={1}>
                <Button
                  onClick={() => handleDownloadTicketA()}
                  id="download ticket A"
                  aria-label="download ticket A"
                >
                  <Icon as={FaFileDownload} fontSize={"xl"} color="gray.700" />
                </Button>
              </VStack>
            </HStack>
            <HStack
              w={"100%"}
              p={4}
              borderRadius="xl"
              justifyContent={"space-between"}
              transition="all 200ms ease"
              borderWidth={1}
              borderStyle={"solid"}
              borderColor="gray.200"
              display={event_B_isChecked ? "flex" : "none"}
            >
              <VStack
                h={"100%"}
                justifyContent={"center"}
                pl={2}
                pr={3}
                display={{ base: "none", md: "flex" }}
              >
                <Icon as={GiTicket} fontSize={"3xl"} />
              </VStack>
              <Text>กิจกรรมร่วมใจผูกพัน สานสัมพันธ์ 60 ปี KKU สู่สังคม</Text>
              <VStack h={"100%"} justifyContent={"center"} px={1}>
                <Button
                  onClick={() => handleDownloadTicketB()}
                  id="download ticket B"
                  aria-label="download ticket B"
                >
                  <Icon as={FaFileDownload} fontSize={"xl"} color="gray.700" />
                </Button>
              </VStack>
            </HStack>
            <HStack
              w={"100%"}
              p={4}
              borderRadius="xl"
              justifyContent={"space-between"}
              transition="all 200ms ease"
              borderWidth={1}
              borderStyle={"solid"}
              borderColor="gray.200"
              display={event_C_isChecked ? "flex" : "none"}
            >
              <VStack
                h={"100%"}
                justifyContent={"center"}
                pl={2}
                pr={3}
                display={{ base: "none", md: "flex" }}
              >
                <Icon as={GiTicket} fontSize={"3xl"} />
              </VStack>
              <Text>กิจกรรมนักศึกษาใหม่ปุญน้อมใจศรัทธาองค์เจ้าพ่อมอดินแดง</Text>
              <VStack h={"100%"} justifyContent={"center"} px={1}>
                <Button
                  onClick={() => handleDownloadTicketC()}
                  id="download ticket C"
                  aria-label="download ticket C"
                >
                  <Icon as={FaFileDownload} fontSize={"xl"} color="gray.700" />
                </Button>
              </VStack>
            </HStack>
            <HStack
              w={"100%"}
              p={4}
              borderRadius="xl"
              justifyContent={"space-between"}
              transition="all 200ms ease"
              borderWidth={1}
              borderStyle={"solid"}
              borderColor="gray.200"
              display={event_D_isChecked ? "flex" : "none"}
            >
              <VStack
                h={"100%"}
                justifyContent={"center"}
                pl={2}
                pr={3}
                display={{ base: "none", md: "flex" }}
              >
                <Icon as={GiTicket} fontSize={"3xl"} />
              </VStack>
              <Text>
                กิจกรรมมอขอร่วมใจ ตุ้มโฮมฮับนักศึกษาใหม่ สู่ขวัญถิ่นมอดินแดง
              </Text>
              <VStack h={"100%"} justifyContent={"center"} px={1}>
                <Button
                  onClick={() => handleDownloadTicketD()}
                  id="download ticket D"
                  aria-label="download ticket D"
                >
                  <Icon as={FaFileDownload} fontSize={"xl"} color="gray.700" />
                </Button>
              </VStack>
            </HStack>
            <HStack mt={4} display={{base: "none", md: "flex"}}>
              <Button
                leftIcon={<FaFileDownload />}
                onClick={() => handleDownloadTicketAll()}
              >
                ดาวน์โหลดทั้งหมด
              </Button>
            </HStack>
            <VStack mt={4}>
              <Text>สามารถดาวน์โหลด Qr code ได้อีก</Text>
              <Text fontSize="2xl" id="countDown">
                15 นาที 15 วินาที
              </Text>
              <Text>ก่อนที่ Browser จะรีเซ็ต</Text>
            </VStack>
          </VStack>
          <HStack justifyContent={"space-between"} w={"100%"}>
            <Button
              variant="ghost"
              onClick={goToPrevious}
              size={{ base: "sm", md: "md" }}
              w={20}
              isDisabled
            >
              ก่อนหน้า
            </Button>
            <Indicator />
            <Button
              type="submit"
              colorScheme="blue"
              isLoading={stepIsOpen}
              size={{ base: "sm", md: "md" }}
              onClick={goToNext}
              w={20}
            >
              ต่อไป
            </Button>
          </HStack>
        </VStack>
      </VStack>
      <TicketA
        ticket_A_isDownload={ticket_A_isDownload}
        setTicket_A_isDownload={setTicket_A_isDownload}
      />
      <TicketB
        ticket_B_isDownload={ticket_B_isDownload}
        setTicket_B_isDownload={setTicket_B_isDownload}
      />
      <TicketC
        ticket_C_isDownload={ticket_C_isDownload}
        setTicket_C_isDownload={setTicket_C_isDownload}
      />
      <TicketD
        ticket_D_isDownload={ticket_D_isDownload}
        setTicket_D_isDownload={setTicket_D_isDownload}
      />
    </>
  );
};

export default DownloadETickets;
