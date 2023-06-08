"use client";

import {
  Box,
  Button,
  Divider,
  HStack,
  Icon,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";

import HeaderContent from "@/components/HeaderContent";
import { COLLECTION_NAME } from "@/interface/collections";
import { APP } from "@/services/firebase.service";
import {
  Timestamp,
  addDoc,
  collection,
  getCountFromServer,
  getFirestore,
} from "firebase/firestore";
import { useState } from "react";
import { AiOutlineCheck, AiOutlineLine } from "react-icons/ai";
import "./page.module.css";

type Props = {
  activeStep: number;
  goToNext(): void;
  goToPrevious(): void;
};

const CLOUD_FIRESTORE = getFirestore(APP);

const ResultNSubmit = ({ activeStep, goToNext, goToPrevious }: Props) => {
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
          h={{base: 2, md: 1}}
            bg={activeStep >= i ? "blue.500" : "gray.200"}
            borderRadius="full"
            key={_}
          />
        ))}
      </HStack>
    );
  };

  // ANCHOR : Initial values
  const [student_id, setStudent_id] = useState(() => {
    if (typeof window !== "undefined") {
      const A = localStorage.getItem(`student_id`);
      if (A) {
        return A;
      }
    }
    return "";
  });
  const [student_name, setStudent_name] = useState(() => {
    if (typeof window !== "undefined") {
      const A = localStorage.getItem(`student_name`);
      if (A) {
        return A;
      }
    }
    return "";
  });
  const [student_faculty, setStudent_faculty] = useState(() => {
    if (typeof window !== "undefined") {
      const A = localStorage.getItem(`student_faculty`);
      if (A) {
        return A;
      }
    }
    return "";
  });
  const [student_food_type, setStudent_food_type] = useState(() => {
    if (typeof window !== "undefined") {
      const A = localStorage.getItem(`student_food_type`);
      if (A) {
        return A;
      }
    }
    return "";
  });
  const [student_foodallergic, setStudent_foodallergic] = useState(() => {
    if (typeof window !== "undefined") {
      const A = localStorage.getItem(`student_foodallergic`);
      if (A) {
        if (A.length === 2) {
          return '"ไม่มี"';
        }
        return A;
      }
    }
    return "";
  });
  const [student_congenital_disease, setStudent_congenital_disease] = useState(
    () => {
      if (typeof window !== "undefined") {
        const A = localStorage.getItem(`student_congenital_disease`);
        if (A) {
          if (A.length === 2) {
            return '"ไม่มี"';
          }
          return A;
        }
      }
      return "";
    }
  );
  const [student_drug_allergic, setStudent_drug_allergic] = useState(() => {
    if (typeof window !== "undefined") {
      const A = localStorage.getItem(`student_drug_allergic`);
      if (A) {
        if (A.length === 2) {
          return '"ไม่มี"';
        }
        return A;
      }
    }
    return "";
  });
  const [student_policy_confirm, setStudent_policy_confirm] = useState(() => {
    if (typeof window !== "undefined") {
      const A = localStorage.getItem(`student_policy_confirm`);
      if (A) {
        return A;
      }
    }
    return "";
  });

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
  const [ticket_A_code, setTicket_A_code] = useState<string>(() => {
    if (typeof window !== "undefined") {
      const A = localStorage.getItem(`ticket_A_code`);
      if (A) {
        return A;
      }
    }
    return "";
  });
  const [ticket_B_code, setTicket_B_code] = useState<string>(() => {
    if (typeof window !== "undefined") {
      const A = localStorage.getItem(`ticket_B_code`);
      if (A) {
        return A;
      }
    }
    return "";
  });
  const [ticket_C_code, setTicket_C_code] = useState<string>(() => {
    if (typeof window !== "undefined") {
      const A = localStorage.getItem(`ticket_C_code`);
      if (A) {
        return A;
      }
    }
    return "";
  });
  const [ticket_D_code, setTicket_D_code] = useState<string>(() => {
    if (typeof window !== "undefined") {
      const A = localStorage.getItem(`ticket_D_code`);
      if (A) {
        return A;
      }
    }
    return "";
  });

  const [shuttle_bus_isChecked, setShuttle_bus_isChecked] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      const A = localStorage.getItem(`shuttle_bus_isChecked`);
      if (A === "checked") {
        return true;
      }
    }
    return false;
  });
  const getCountStudentFromServer = async () => {
    const studentRef = collection(CLOUD_FIRESTORE, "TicketNumber");
    const snapshot = await getCountFromServer(studentRef);
    const ticket_A_code = localStorage.getItem("count_student_student");
    if (!ticket_A_code) {
      localStorage.setItem(
        "count_student_student",
        snapshot.data().count.toString()
      );
    }
  };
  const handleDelayedClick = async () => {
    stepOnOpen();

    getCountStudentFromServer();

    await addDoc(collection(CLOUD_FIRESTORE, COLLECTION_NAME.STUDENTS), {
      student_id: JSON.parse(student_id),
      student_name: JSON.parse(student_name),
      student_faculty: JSON.parse(student_faculty),
      student_food_type: JSON.parse(student_food_type),
      student_foodallergic: JSON.parse(student_foodallergic),
      student_congenital_disease: JSON.parse(student_congenital_disease),
      student_drug_allergic: JSON.parse(student_drug_allergic),
      student_policy_confirm: JSON.parse(student_policy_confirm),
      event_A_isChecked: event_A_isChecked ? true : false,
      event_B_isChecked: event_B_isChecked ? true : false,
      event_C_isChecked: event_C_isChecked ? true : false,
      event_D_isChecked: event_D_isChecked ? true : false,
      ticket_A_code: event_A_isChecked ? ticket_A_code : "",
      ticket_B_code: event_B_isChecked ? ticket_B_code : "",
      ticket_C_code: event_C_isChecked ? ticket_C_code : "",
      ticket_D_code: event_D_isChecked ? ticket_D_code : "",
      ticket_A_used: false,
      ticket_B_used: false,
      ticket_C_used: false,
      ticket_D_used: false,
      registered_date_type_1: Timestamp.fromDate(new Date()).toDate().toJSON(),
      registered_date_type_2: Timestamp.fromDate(new Date())
        .toDate()
        .toLocaleString(),
    })
    .then(() => {
      setTimeout(() => {
        goToNext();
        stepOnClose();
      }, 1500);
    });

    await addDoc(collection(CLOUD_FIRESTORE, COLLECTION_NAME.TICKET_NUMBER), {
      event_A_isChecked: event_A_isChecked ? true : false,
      event_B_isChecked: event_B_isChecked ? true : false,
      event_C_isChecked: event_C_isChecked ? true : false,
      event_D_isChecked: event_D_isChecked ? true : false,
      ticket_A_code: event_A_isChecked ? ticket_A_code : "",
      ticket_B_code: event_B_isChecked ? ticket_B_code : "",
      ticket_C_code: event_C_isChecked ? ticket_C_code : "",
      ticket_D_code: event_D_isChecked ? ticket_D_code : "",
    })
  };
  return (
    <>
      <VStack h={"100%"} justifyContent="space-between">
        <HeaderContent
          title={"ตรวจสอบข้อมูล"}
          title2={"และยืนยันการลงทะเบียน"}
        />
        <VStack
          mt={{ base: 4, md: 4 }}
          spacing={4}
          flex={1}
          justifyContent={"space-between"}
          w={"100%"}
        >
          {/* ANCHOR : main sub block */}
          <VStack w={"100%"} px={2}>
            {/* ANCHOR : Heading 1 */}
            <HStack w={"100%"}>
              <Text fontWeight={600} fontSize={{base: "md", md: "lg"}} color={"#1d1d1f"}>
                ข้อมูลของคุณ
              </Text>
            </HStack>

            {/* ANCHOR : Content 1 */}
            <VStack w={"100%"} mt={1} spacing={0}>
              {[
                {
                  title: "รหัสนักศึกษา",
                  value: JSON.parse(student_id),
                },
                {
                  title: "ชื่อ นามสกุล",
                  value: JSON.parse(student_name),
                },
                {
                  title: "คณะ",
                  value: JSON.parse(student_faculty),
                },
                {
                  title: "ประเภทอาหาร",
                  value: JSON.parse(student_food_type),
                },
                {
                  title: "ยาที่แพ้",
                  value: JSON.parse(student_foodallergic),
                },
                {
                  title: "อาหารที่แพ้",
                  value: JSON.parse(student_drug_allergic),
                },
                {
                  title: "โรคประจำตัว",
                  value: JSON.parse(student_congenital_disease),
                },
              ].map((i, _) => (
                <HStack w={"100%"} key={_}>
                  <Text
                    fontWeight={500}
                    color="#1d1d1f"
                    w={{base: "120px", md: "140px"}}
                    fontSize={{base: "sm", md: "md"}}
                  >
                    {i.title}
                  </Text>
                  <Text fontWeight={400} color={"#1d1d1f"}fontSize={{base: "sm", md: "md"}}>
                    {i.value}
                  </Text>
                </HStack>
              ))}
            </VStack>

            {/* ANCHOR : Divider */}
            <Divider my={{base: 2, md: 4}} />

            {/* ANCHOR : Heading 2 */}
            <HStack w={"100%"}>
              <Text fontWeight={600} fontSize={{base: "md", md: "lg"}} color={"#1d1d1f"}>
                กิจกรรมที่เลือกเข้าร่วม
              </Text>
            </HStack>

            {/* ANCHOR : Content 2 */}
            <VStack w={"100%"} mt={1} spacing={0}>
              <HStack w={"100%"}>
                <Icon
                  as={event_A_isChecked ? AiOutlineCheck : AiOutlineLine}
                  color={event_A_isChecked ? "green.500" : "gray.300"}
                  alignSelf="flex-start"
                  mt={1}
                  fontSize={{base: "md", md:"lg"}}
                />
                <Text
                  ml={2}
                  fontSize={{base: "sm", md: "md"}}
                  color={event_A_isChecked ? "black" : "gray.300"}
                >
                  กิจกรรมโฮมมั่นขวัญแก่น ผูกแขนนักศึกษาใหม่ KKU Bye See 2023
                </Text>
              </HStack>
              <HStack w={"100%"}>
                <Icon
                  as={event_B_isChecked ? AiOutlineCheck : AiOutlineLine}
                  color={event_B_isChecked ? "green.500" : "gray.300"}
                  alignSelf="flex-start"
                  mt={1}
                  fontSize={{base: "md", md:"lg"}}
                />
                <Text
                  ml={2}
                  fontSize={{base: "sm", md: "md"}}
                  color={event_B_isChecked ? "#1d1d1f" : "gray.300"}
                >
                  กิจกรรมร่วมใจผูกพัน สานสัมพันธ์ 60 ปี KKU สู่สังคม
                </Text>
              </HStack>
              <HStack w={"100%"}>
                <Icon
                  as={event_C_isChecked ? AiOutlineCheck : AiOutlineLine}
                  color={event_C_isChecked ? "green.500" : "gray.300"}
                  alignSelf="flex-start"
                  mt={1}
                  fontSize={{base: "md", md:"lg"}}
                />
                <Text
                  ml={2}
                  fontSize={{base: "sm", md: "md"}}
                  color={event_C_isChecked ? "#1d1d1f" : "gray.300"}
                >
                  กิจกรรมนักศึกษาใหม่ปุญน้อมใจศรัทธาองค์เจ้าพ่อมอดินแดง
                </Text>
              </HStack>
              <HStack w={"100%"}>
                <Icon
                  as={event_D_isChecked ? AiOutlineCheck : AiOutlineLine}
                  color={event_D_isChecked ? "green.500" : "gray.300"}
                  alignSelf="flex-start"
                  mt={1}
                  fontSize={{base: "md", md:"lg"}}
                />
                <Text
                  ml={2}
                  fontSize={{base: "sm", md: "md"}}
                  color={event_D_isChecked ? "#1d1d1f" : "gray.300"}
                >
                  กิจกรรมมอขอร่วมใจ ตุ้มโฮมฮับนักศึกษาใหม่ สู่ขวัญถิ่นมอดินแดง
                </Text>
              </HStack>
            </VStack>
            {/* ANCHOR : Divider */}
            <Divider my={{base: 2, md: 4}} />

            {/* ANCHOR : Heading 2 */}
            <HStack w={"100%"}>
              <Text fontWeight={600} fontSize={{base: "md", md: "lg"}} color={"#1d1d1f"}>
              ต้องการใช้รถส่วนกลางสำหรับเดินทางกลับหรือไม่?
              </Text>
            </HStack>

            {/* ANCHOR : Content 2 */}
            <VStack w={"100%"} mt={1} spacing={0}>
              <HStack w={"100%"}>
                <Icon
                  as={shuttle_bus_isChecked ? AiOutlineCheck : AiOutlineLine}
                  color={shuttle_bus_isChecked ? "green.500" : "gray.300"}
                  alignSelf="flex-start"
                  mt={1}
                  fontSize={{base: "md", lg: "lg"}}
                />
                <Text
                  ml={2}
                  fontSize={{base: "sm", md: "md"}}
                  color={shuttle_bus_isChecked ? "black" : "gray.300"}
                >
                  ต้องการ
                </Text>
              </HStack>
            </VStack>
          </VStack>
          <HStack justifyContent={"space-between"} w={"100%"}>
            <Button
              variant="ghost"
              onClick={goToPrevious}
              size={{ base: "sm", md: "md" }}
              w={20}
            >
              ก่อนหน้า
            </Button>
            <Indicator />
            <Button
              type="submit"
              colorScheme="green"
              isLoading={stepIsOpen}
              size={{ base: "sm", md: "md" }}
              onClick={() => handleDelayedClick()}

            >
              ยืนยันการลงทะเบียน
            </Button>
          </HStack>
        </VStack>
      </VStack>
    </>
  );
};

export default ResultNSubmit;
