"use client";

import {
  Box,
  Button,
  Checkbox,
  Divider,
  Flex,
  FormLabel,
  HStack,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";

import "./page.module.css";

import CustomCheckbox from "../components/CheckboxCard";
import HeaderContent from "@/components/HeaderContent";
import { useEffect, useState } from "react";
type Props = {
  activeStep: number;
  goToNext(): void;
  goToPrevious(): void;
};

const ChooseEvents = ({ activeStep, goToNext, goToPrevious }: Props) => {
  // ANCHOR : Control about steps
  const {
    isOpen: stepIsOpen,
    onOpen: stepOnOpen,
    onClose: stepOnClose,
  } = useDisclosure();
  const handleDelayedClick = () => {
    stepOnOpen();
    setTimeout(() => {
      goToNext();
      stepOnClose();
    }, 1500);
  };
  const StepState = () => {
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

  const [shuttle_bus_isChecked, setShuttle_bus_isChecked] = useState(() => {
    if (typeof window !== "undefined") {
      const A = localStorage.getItem(`shuttle_bus_isChecked`);
      if (A === "checked") {
        return true;
      }
    }
    return false;
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const A = localStorage.getItem(`shuttle_bus_isChecked`);
      if (A === "checked") {
        setShuttle_bus_isChecked(true);
      }
    }
  }, []);

  const handleCheckboxChange = (
    isChecked: boolean | ((presState: boolean) => boolean)
  ) => {
    setShuttle_bus_isChecked(isChecked);
    if (typeof window !== "undefined") {
      localStorage.setItem(
        `shuttle_bus_isChecked`,
        isChecked ? "checked" : "disable"
      );
    }
  };

  return (
    <>
      <VStack h={"100%"} justifyContent="space-between">
        <VStack w={"100%"}>
          <HeaderContent
            title={"เลือกกิจกรรมที่ต้องการเข้าร่วม"}
            sub_title={"เมื่อเลือกลงกิจกรรมแล้ว จะไม่สามารถลงเพิ่มภายหลังได้"}
          />
          <VStack spacing={3} mt={4} w={"100%"}>
            <CustomCheckbox
              event_type={"A"}
              event_name={
                "กิจกรรมโฮมมั่นขวัญแก่น ผูกแขนนักศึกษาใหม่ KKU BYE SEE 2023"
              }
              imgCoverRef={"event_1.png"}
              event_start_date={"12 มิถุนายน 2566"}
              event_start_time={"15.00 -22.00 น."}
              event_dressing={"ชุดเฟรชชี่ KKU60 หรือชุดสุภาพ"}
              event_location={
                "อาคารพลศึกษา และ สนามกีฬา 50 ปี มหาวิทยาลัยขอนแก่น"
              }
            />
            <CustomCheckbox
              event_type={"B"}
              event_name={"กิจกรรมร่วมใจผูกพัน สานสัมพันธ์ 60 ปี KKU สู่สังคม"}
              imgCoverRef={"event_2.png"}
              event_start_date={"13 มิถุนายน 2566"}
              event_start_time={"08.00 - 16.00 น."}
              event_dressing={"ชุดสุภาพโทนสีเข้ม รองเท้าหุ้มส้น"}
              event_location={"อาคารพลศึกษา มหาวิทยาลัยขอนแก่น"}
            />
            <CustomCheckbox
              event_type={"C"}
              event_name={
                "กิจกรรมนักศึกษาใหม่ปุญญฺน้อมใจศรัทธาองค์เจ้าพ่อมอดินแดง"
              }
              imgCoverRef={"event_3.png"}
              event_start_date={"17 มิถุนายน 2566"}
              event_start_time={"13.00 - 20.00 น."}
              event_dressing={
                "เสื้อพื้นเมือง ชุดสุภาพ กางเกงหรือกระโปรงยาว รองเท้าหุ้มส้น"
              }
              event_location={"อาคารพลศึกษา และศาลเจ้าพ่อมอดินแดง"}
            />
            <CustomCheckbox
              event_type={"D"}
              event_name={
                "กิจกรรมมอขอร่วมใจ ตุ้มโฮมฮับนักศึกษาใหม่ สู่ขวัญถิ่นมอดินแดง"
              }
              imgCoverRef={"event_4.png"}
              event_start_date={"18 มิถุนายน 2566"}
              event_start_time={"15.00 - 22.00 น."}
              event_dressing={"ชุดนักศึกษาหรือชุดสุภาพสีขาว รองเท้าหุ้มส้น"}
              event_location={
                "อาคารพลศึกษา และ สนามกีฬา 50 ปี มหาวิทยาลัยขอนแก่น"
              }
            />
          </VStack>
          {/* ANCHOR : Divider */}
          <Divider my={4} w={"100%"} />

          {/* ANCHOR : Heading 3 */}
          <HStack px={2} w={"100%"}>
            <Text fontWeight={600} fontSize={{base: "md", md: "lg"}} color={"#1d1d1f"}>
              ต้องการใช้รถส่วนกลางสำหรับเดินทางกลับหรือไม่?
            </Text>
          </HStack>

          {/* ANCHOR : Content 3 */}
          <VStack px={2} w={"100%"}>
            <HStack w={"100%"}>
              <Checkbox
                size="md"
                defaultChecked={shuttle_bus_isChecked}
                onChange={(e) => handleCheckboxChange(e.target.checked)}
              >
                ต้องการ
              </Checkbox>
            </HStack>
            <Text fontSize={{base: "xs", md: "sm"}} color="gray.500">
              *หมายเหตุ ในกิจกรรมวันที่ 12, 17 และ 18 มิถุนายน 2566
              กิจกรรมจะเสร็จสิ้นตามเวลาที่กำหนดผู้จัดจึงได้เตรียมรถขนส่งส่วนกลาง
              สำหรับรับส่งนักศึกษาไปยังหอพักส่วนกลางและหอใน
            </Text>
          </VStack>
        </VStack>
        <HStack justifyContent={"space-between"} w={"100%"}>
          <Button
            variant="ghost"
            onClick={goToPrevious}
            size={{ base: "sm", md: "md" }}
            w={20}
            py={6}
          >
            ก่อนหน้า
          </Button>
          <StepState />
          <Button
            type="submit"
            colorScheme="blue"
            isLoading={stepIsOpen}
            size={{ base: "sm", md: "md" }}
            onClick={handleDelayedClick}
            w={20}
            py={6}
          >
            ต่อไป
          </Button>
        </HStack>
      </VStack>
    </>
  );
};

export default ChooseEvents;
