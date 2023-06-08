/* eslint-disable react/jsx-no-undef */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { ChakraUiProvider } from "@/provider/chakra-ui.provider";
import {
  Box,
  Container,
  Flex,
  HStack,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure
} from "@chakra-ui/react";
import "./page.module.css";

import { useSteps } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import BasicInformation from "./step1.BasicInformation";
import ChooseEvents from "./step2.ChooseEvents";
import ResultNSubmit from "./step3.ResultNSubmit";
import DownloadETickets from "./step4.DownloadETickets";
import AnnouncementsNNews from "./step5.AnnouncementsNNews";

export default function Home() {
  // ANCHOR : Control step
  const [activeStepCurrent, setActiveStepCurrent] = useState(1);
  const { activeStep, goToNext, goToPrevious, setActiveStep } = useSteps({
    index: Number(activeStepCurrent),
    count: 5,
  });
  useEffect(() => {
    if (typeof window !== "undefined") {
      const A = localStorage.getItem("activeStepCurrent");
      if (A) {
        const B = Number(A);
        setActiveStepCurrent(B);
        setActiveStep(B);
      }
    }
  }, []);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    setActiveStepCurrent(activeStep);
    if (typeof window !== "undefined") {
      localStorage.setItem("activeStepCurrent", activeStep.toString());
    }
  }, [activeStep]);

  // ANCHOR : Control star
  const {
    isOpen: starIsOpen,
    onOpen: starOnOpen,
    onClose: starOnClose,
  } = useDisclosure();
  useEffect(() => {
    !starIsOpen &&
      setTimeout(() => {
        starOnOpen();
      }, 4000);
  }, [starIsOpen]);

  // ANCHOR : Step list
  const steps = [
    {
      name: "Basic Information",
      cpn: (
        <BasicInformation
          activeStep={activeStep}
          goToNext={goToNext}
          goToPrevious={goToPrevious}
        />
      ),
    },
    {
      name: "Choose Events",
      cpn: (
        <ChooseEvents
          activeStep={activeStep}
          goToNext={goToNext}
          goToPrevious={goToPrevious}
        />
      ),
    },
    {
      name: "Result and Submit",
      cpn: (
        <ResultNSubmit
          activeStep={activeStep}
          goToNext={goToNext}
          goToPrevious={goToPrevious}
        />
      ),
    },
    {
      name: "Download E-Tickets",
      cpn: (
        <DownloadETickets
          activeStep={activeStep}
          goToNext={goToNext}
          goToPrevious={goToPrevious}
        />
      ),
    },
    {
      name: "Announcements and News",
      cpn: (
        <AnnouncementsNNews
          activeStep={activeStep}
          goToNext={goToNext}
          goToPrevious={goToPrevious}
        />
      ),
    },
  ];

  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const browserType: string = navigator.userAgent
    if (browserType.match(/fbmd/i) || browserType.match(/fbav/i) || browserType.match(/fbsn/i) || browserType.match(/line/i) || browserType.match(/instagram/i)){
      onOpen()
    }
  }, [])


  return (
    <ChakraUiProvider>
      <Box as="main" px={4} py={{ base: 4, md: 8 }} position="relative">
      <Modal isOpen={isOpen} onClose={onClose} size="md">
        <ModalOverlay />
        <ModalContent  borderRadius="2xl" p={2} pb={8}>
          <ModalHeader fontSize={"2xl"} pb={2}>แจ้งเตือน</ModalHeader>
          <ModalCloseButton top={4} right={4} />
          <ModalBody>
            <Text>
            คุณกำลังใช้งานเว็บไซต์ผ่าน Browser ที่ไม่รองรับการทำงานของฟังก์ชันสร้าง E-Ticket กรุณาเปลี่ยน Browser เพื่อให้สามารถสร้าง E-Ticket ได้
            </Text>
            <Text fontSize={"md"} mt={4} color="#1d1d1f" fontWeight={600}>Browser ที่แนะนำ</Text>
            <HStack mt={2} spacing={4}>
            <Image src="/safari.png" alt="safari" width={10} h={10} />
            <Image src="/microsoft.png" alt="safari" width={10} h={10} />
            <Image src="/chrome.png" alt="safari" width={10} h={10} />
            </HStack>
            <Text fontSize={"md"} mt={6} color="#1d1d1f" fontWeight={400}>หรือกดเมนู &rdquo;Open in browser&rdquo;</Text>
          </ModalBody>
{/* 
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>
        {/* ANCHOR : Logo block */}
        <HStack
          w={"full"}
          justifyContent="center"
          alignItems="center"
          spacing={{ base: 4, md: 8 }}
          // ml={{ base: 0, md: 1 }}
          display={{ base: activeStep > 1 ? "none" : "flex", md: "flex" }}
        >
          <img
            src="/su.png"
            alt="logo"
            width="100"
            height="100"
            style={{ marginLeft: "-12px" }}
            className="su-logo"
          />
          <img
            src="/logo.png"
            alt="logo"
            width="120"
            height="150"
            style={{ marginLeft: "12px" }}
            className="j-logo"
          />
          <img
            src="/lu.png"
            alt="logo"
            width="100"
            height="100"
            className="lu-logo"
          />
        </HStack>
        <Container
          // ANCHOR : set width and height
          maxW={"500px"}
          h={{ base: activeStep === 4 ? "700px" : activeStep === 3 ? "1000px" : activeStep === 2 ? "1100px" : "1250px", md: "1100px" }}
          bg="white"
          borderRadius="2xl"
          mt={{ base: 4, md: 8 }}
          py={{ base: 6, md: 8 }}
          px={{ base: 6, md: 8 }}
          zIndex={100}
          as={Flex}
          flexDirection="column"
          justifyContent="space-between"
          position="relative"
          boxShadow="xl"
          backgroundColor="white"
        >
          {/* ANCHOR : Contents block */}
          {steps[activeStep - 1].cpn}
        </Container>
      </Box>

      {/* ANCHOR : Footer */}
      <footer>
        <HStack
          justifyContent="center"
          spacing={{ base: 1, md: 4 }}
          opacity={0.25}
          flexDirection={{ base: "column", md: "row" }}
          py={{ base: 4, md: 8 }}
        >
          <Text color={"white"} textAlign="center">
            Presented by{" "}
            <a
              href="https://www.facebook.com/kkustudentunion"
              style={{ fontWeight: "bold", textDecoration: "underline" }}
            >
              KKUSU66 & LUEADSEEID
            </a>
          </Text>
          <Text color={"white"} textAlign="center">
            Graphic by{" "}
            <a
              href="https://www.instagram.com/schwepx_/"
              style={{ fontWeight: "bold", textDecoration: "underline" }}
            >
              SCHWEPX_
            </a>
          </Text>
          <Text color={"white"} textAlign="center">
            Developed by{" "}
            <a
              href="/"
              style={{ fontWeight: "bold", textDecoration: "underline" }}
            >
              ITSKYUQ
            </a>
          </Text>
        </HStack>
      </footer>

      {/* ANCHOR : STAR */}
      {true && (
        <Box
          className="starParent"
          // display={{ base: "none", md: "block" }}
        >
          <span className="starChildren1"></span>
          <span className="starChildren2"></span>
          <span className="starChildren3"></span>
          <span className="starChildren4"></span>
          <span className="starChildren5"></span>
          <span className="starChildren6"></span>
          <span className="starChildren7"></span>
          <span className="starChildren8"></span>
          <span className="starChildren9"></span>
          <span className="starChildren10"></span>
        </Box>
      )}
    </ChakraUiProvider>
  );
}
