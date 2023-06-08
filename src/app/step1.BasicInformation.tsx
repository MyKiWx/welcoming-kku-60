/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import HeaderContent from "@/components/HeaderContent";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  HStack,
  Input,
  PinInput,
  PinInputField,
  Radio,
  RadioGroup,
  Select,
  Skeleton,
  Stack,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import "./page.module.css";
import { STUDENT_INFORMATION } from "@/interface/student-infomation";
import { useEffect, useState } from "react";

type Props = {
  activeStep: number;
  goToNext(): void;
  goToPrevious(): void;
};

const BasicInformation = ({ activeStep, goToNext, goToPrevious }: Props) => {
  // ANCHOR : Control page loading
  const {
    isOpen: pageLoading,
    onOpen: pageStartLoading,
    onClose: pageEndLoading,
  } = useDisclosure({
    defaultIsOpen: true,
  });

  // ANCHOR : Control about steps
  const {
    isOpen: stepIsOpen,
    onOpen: stepOnOpen,
    onClose: stepOnClose,
  } = useDisclosure();

  const [student_id, setStudent_id] = useState("66");
  const [student_name, setStudent_name] = useState("");
  const [student_faculty, setStudent_faculty] = useState("");
  const [student_food_type, setStudent_food_type] = useState("อาหารทั่วไป");
  const [student_foodallergic, setStudent_foodallergic] = useState("");
  const [student_congenital_disease, setStudent_congenital_disease] =
    useState("");
  const [student_drug_allergic, setStudent_drug_allergic] = useState("");
  const [student_policy_confirm, setStudent_policy_confirm] = useState(false);

  const [test, setTest] = useState("");

  const initialValues = {
    student_id: student_id,
    student_name: student_name,
    student_faculty: student_faculty,
    student_food_type: student_food_type,
    student_foodallergic: student_foodallergic,
    student_congenital_disease: student_congenital_disease,
    student_drug_allergic: student_drug_allergic,
    student_policy_confirm: student_policy_confirm,
  };

  const validationSchema = Yup.object({
    student_id: Yup.string()
      .matches(/^66/, 'กรุณากรอกรหัสนักศึกษาที่ขึ้นต้นด้วย "66"')
      .min(10, "ต้องกรอกรหัสนักศึกษาให้ครบทั้ง 10 ตัว")
      .required("กรุกณากรอกรหัสนักศึกษา"),
    student_name: Yup.string()
      .min(7, "กรุณากรอกชื่อให้ถูกต้อง")
      .required("กรุณากรอกชื่อ"),
    student_faculty: Yup.string().required("กรุณาเลือกคณะ"),
    student_policy_confirm: Yup.boolean()
      .isTrue("กรุณากดยินยอมเพื่อให้ดำเนินการต่อไปได้")
      .required("กรุณากดยินยอมเพื่อให้ดำเนินการต่อไปได้"),
  });

  const handleSubmit = (values: any, actions: any) => {
    stepOnOpen();
    setStudent_id(values.student_id);
    setStudent_name(values.student_name);
    setStudent_faculty(values.student_faculty);
    setStudent_food_type(values.student_faculty);
    setStudent_foodallergic(values.student_foodallergic);
    setStudent_congenital_disease(values.student_congenital_disease);
    setStudent_drug_allergic(values.student_drug_allergic);
    setStudent_policy_confirm(values.student_policy_confirm);
    if (!(typeof window === "undefined")) {
      localStorage.setItem("student_id", JSON.stringify(values.student_id));
      localStorage.setItem("student_name", JSON.stringify(values.student_name));
      localStorage.setItem(
        "student_faculty",
        JSON.stringify(values.student_faculty)
      );
      localStorage.setItem(
        "student_food_type",
        JSON.stringify(values.student_food_type)
      );
      localStorage.setItem(
        "student_foodallergic",
        JSON.stringify(values.student_foodallergic)
      );
      localStorage.setItem(
        "student_congenital_disease",
        JSON.stringify(values.student_congenital_disease)
      );
      localStorage.setItem(
        "student_drug_allergic",
        JSON.stringify(values.student_drug_allergic)
      );
      localStorage.setItem(
        "student_policy_confirm",
        JSON.stringify(values.student_policy_confirm)
      );
    }
    setTimeout(() => {
      goToNext();
      stepOnClose();
    }, 1500);
    actions.setSubmitting(false);
  };
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
  useEffect(() => {
    pageStartLoading();
    if (!(typeof window === "undefined")) {
      let student_id = localStorage.getItem("student_id");
      let student_name = localStorage.getItem("student_name");
      let student_faculty = localStorage.getItem("student_faculty");
      let student_food_type = localStorage.getItem("student_food_type");
      let student_foodallergic = localStorage.getItem("student_foodallergic");
      let student_congenital_disease = localStorage.getItem(
        "student_congenital_disease"
      );
      let student_drug_allergic = localStorage.getItem("student_drug_allergic");
      let student_policy_confirm = localStorage.getItem(
        "student_policy_confirm"
      );

      if (student_id) {
        setStudent_id(JSON.parse(student_id));
      }
      if (student_name) {
        setStudent_name(JSON.parse(student_name));
      }
      if (student_faculty) {
        setStudent_faculty(JSON.parse(student_faculty));
      }
      if (student_food_type) {
        setStudent_food_type(JSON.parse(student_food_type));
      }
      if (student_foodallergic) {
        setStudent_foodallergic(JSON.parse(student_foodallergic));
      }
      if (student_congenital_disease) {
        setStudent_congenital_disease(JSON.parse(student_congenital_disease));
      }
      if (student_drug_allergic) {
        setStudent_drug_allergic(JSON.parse(student_drug_allergic));
      }
      if (student_policy_confirm) {
        setStudent_policy_confirm(JSON.parse(student_policy_confirm));
      }
      pageEndLoading();
    }
  }, []);



  useEffect(() => {
    console.log(navigator.userAgent)
  } , [])


  return (
    <>
      {!pageLoading && (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({
            values,
            errors,
            touched,
            isSubmitting,
            isValidating,
            status,
            submitCount,
          }: {
            values: any;
            errors: any;
            touched: any;
            isSubmitting: boolean;
            isValidating: boolean;
            status?: any;
            submitCount: number;
          }) => (
            <Form style={{ height: "100%" }} action={"/"}>
              <Flex w={"100%"} h={"100%"} flexDirection={"column"}>
                <HeaderContent
                  title={"ลงทะเบียนเข้าร่วมกิจกรรม"}
                  sub_title={"ข้อมูลที่กรอกจะถูกนำมาใช้ในการจัดกิจกรรม"}
                />
                <VStack
                  w={"100%"}
                  mt={{ base: 6, md: 6 }}
                  flex={1}
                  justifyContent={"space-between"}
                >
                  <VStack w={"100%"} spacing={3}>
                    <Field name="student_id">
                      {({
                        field,
                        form,
                      }: {
                        field: any;
                        form: any;
                        meta: any;
                      }) => (
                        <>
                          <FormControl
                            isInvalid={
                              !!errors.student_id && touched.student_id
                            }
                            zIndex={100}
                            id="student_id"
                          >
                            <FormLabel
                              size={{ base: "sm", md: "md" }}
                              w={"100%"}
                            >
                              รหัสนักศึกษา&nbsp;
                              <span style={{ color: "#E53E3E" }}>*</span>
                            </FormLabel>
                            <HStack w={"100%"}>
                              <PinInput
                                {...field}
                                id="student_id"
                                name="student_id"
                                size={{ base: "md", md: "md" }}
                                onChange={(value) =>
                                  form.setFieldValue("student_id", value)
                                }
                                isInvalid={
                                  !!errors.student_id && touched.student_id
                                }
                              >
                                <PinInputField />
                                <PinInputField />
                                <PinInputField />
                                <PinInputField />
                                <PinInputField />
                                <PinInputField />
                                <PinInputField />
                                <PinInputField />
                                <PinInputField />
                                <Box
                                  border="none"
                                  display={{ base: "flex", md: "flex" }}
                                  alignItems="center"
                                  justifyContent="center"
                                  color="#A0AEC0"
                                  w={1}
                                >
                                  -
                                </Box>
                                <PinInputField />
                              </PinInput>
                            </HStack>
                            <ErrorMessage
                              name="student_id"
                              component={FormErrorMessage}
                            />
                            <FormHelperText fontSize={"sm"} color="gray.500">
                              *สำหรับนักศึกษาที่ยังไม่ได้รับรหัสนักศึกษา ให้กรอก
                              6600000000
                            </FormHelperText>
                          </FormControl>
                        </>
                      )}
                    </Field>
                    <Field
                      as={FormControl}
                      name={STUDENT_INFORMATION.NAME}
                      isInvalid={!!errors.student_name && touched.student_name}
                      zIndex={100}
                    >
                      <FormLabel size={{ base: "sm", md: "md" }}>
                        ชื่อ นามสกุล&nbsp;
                        <span style={{ color: "#E53E3E" }}>*</span>
                      </FormLabel>
                      <Input
                        id={STUDENT_INFORMATION.NAME}
                        name={STUDENT_INFORMATION.NAME}
                        type="text"
                        size={{ base: "md", md: "md" }}
                        placeholder="กรอกชื่อและนามสกุล"
                        defaultValue={values.student_name}
                      />
                      <ErrorMessage
                        name={STUDENT_INFORMATION.NAME}
                        component={FormErrorMessage}
                      />
                    </Field>
                    <Field
                      as={FormControl}
                      name={STUDENT_INFORMATION.FACULTY}
                      isInvalid={
                        !!errors.student_faculty && touched.student_faculty
                      }
                      zIndex={100}
                    >
                      <FormLabel size={{ base: "sm", md: "md" }}>
                        คณะ&nbsp;<span style={{ color: "#E53E3E" }}>*</span>
                      </FormLabel>
                      <HStack>
                        <Select
                          id={STUDENT_INFORMATION.FACULTY}
                          name={STUDENT_INFORMATION.FACULTY}
                          placeholder="เลือกคณะ"
                          size={{ base: "md", md: "md" }}
                          borderRadius="lg"
                          defaultValue={values.student_faculty}
                        >
                          <option value="วิทยาศาสตร์">คณะวิทยาศาสตร์</option>
                          <option value="เกษตรศาสตร์">คณะเกษตรศาสตร์</option>
                          <option value="วิศวกรรมศาสตร์">
                            คณะวิศวกรรมศาสตร์
                          </option>
                          <option value="ศึกษาศาสตร์">คณะศึกษาศาสตร์</option>
                          <option value="พยาบาลศาสตร์">คณะพยาบาลศาสตร์</option>
                          <option value="แพทยศาสตร์">คณะแพทยศาสตร์</option>
                          <option value="มนุษยศาสตร์และสังคมศาสตร์">
                            คณะมนุษยศาสตร์และสังคมศาสตร์
                          </option>
                          <option value="เทคนิคการแพทย์">
                            คณะเทคนิคการแพทย์
                          </option>
                          <option value="สาธารณสุขศาสตร์">
                            คณะสาธารณสุขศาสตร์
                          </option>
                          <option value="ทันตแพทยศาสตร์">
                            คณะทันตแพทยศาสตร์
                          </option>
                          <option value="เภสัชศาสตร์">คณะเภสัชศาสตร์</option>
                          <option value="เทคโนโลยี">คณะเทคโนโลยี</option>
                          <option value="สัตวแพทยศาสตร์">
                            คณะสัตวแพทยศาสตร์
                          </option>
                          <option value="สถาปัตยกรรมศาสตร์">
                            คณะสถาปัตยกรรมศาสตร์
                          </option>
                          <option value="บริหารธุรกิจและการบัญชี">
                            คณะบริหารธุรกิจและการบัญชี
                          </option>
                          <option value="ศิลปกรรมศาสตร์">
                            คณะศิลปกรรมศาสตร์
                          </option>
                          <option value="นิติศาสตร์">คณะนิติศาสตร์</option>
                          <option value="วิทยาลัยการปกครองท้องถิ่น">
                            วิทยาลัยการปกครองท้องถิ่น
                          </option>
                          <option value="วิทยาลัยนานาชาติ">
                            วิทยาลัยนานาชาติ
                          </option>
                          <option value="เศรษฐศาสตร์">คณะเศรษฐศาสตร์</option>
                          <option value="วิทยาลัยการคอมพิวเตอร์">
                            วิทยาลัยการคอมพิวเตอร์
                          </option>
                          <option value="สหวิทยาการ">สหวิทยาการ</option>
                        </Select>
                      </HStack>
                      <ErrorMessage
                        name={STUDENT_INFORMATION.FACULTY}
                        component={FormErrorMessage}
                      />
                    </Field>
                    <Field
                      as={FormControl}
                      name={STUDENT_INFORMATION.FOOD_TYPE}
                      zIndex={100}
                    >
                      <FormLabel size={{ base: "sm", md: "md" }}>
                        ประเภทอาหารที่รับประทาน
                      </FormLabel>
                      <RadioGroup
                        id={STUDENT_INFORMATION.FOOD_TYPE}
                        name={STUDENT_INFORMATION.FOOD_TYPE}
                        size={{ base: "md", md: "md" }}
                        defaultValue={values.student_food_type}
                      >
                        <Stack direction={{ base: "column", md: "row" }}>
                          <Radio value="อาหารทั่วไป">อาหารทั่วไป</Radio>
                          <Radio value="อาหารฮาลาล">อาหารฮาลาล</Radio>
                          <Radio value="อาหารเจ">อาหารเจ</Radio>
                          <Radio value="อาหารมังสวิรัติ">อาหารมังสวิรัติ</Radio>
                        </Stack>
                      </RadioGroup>
                    </Field>
                    <Field
                      as={FormControl}
                      name={STUDENT_INFORMATION.FOOD_ALLERGIC}
                      zIndex={100}
                    >
                      <FormLabel size={{ base: "sm", md: "md" }}>
                        อาหารที่แพ้
                      </FormLabel>
                      <Input
                        id={STUDENT_INFORMATION.FOOD_ALLERGIC}
                        name={STUDENT_INFORMATION.FOOD_ALLERGIC}
                        type="text"
                        size={{ base: "md", md: "md" }}
                        variant="filled"
                        defaultValue={values.student_foodallergic}
                        placeholder="-"
                      />
                    </Field>
                    <Field
                      as={FormControl}
                      name={STUDENT_INFORMATION.DRUG_ALLERGIC}
                      zIndex={100}
                    >
                      <FormLabel size={{ base: "sm", md: "md" }}>
                        ยาที่แพ้
                      </FormLabel>
                      <Input
                        id={STUDENT_INFORMATION.DRUG_ALLERGIC}
                        name={STUDENT_INFORMATION.DRUG_ALLERGIC}
                        type="text"
                        size={{ base: "md", md: "md" }}
                        variant="filled"
                        defaultValue={values.student_drug_allergic}
                        placeholder="-"
                      />
                    </Field>
                    <Field
                      as={FormControl}
                      name={STUDENT_INFORMATION.CONGENITAL_DISEASE}
                      zIndex={100}
                    >
                      <FormLabel size={{ base: "sm", md: "md" }}>
                        โรคประจำตัว
                      </FormLabel>
                      <Input
                        id={STUDENT_INFORMATION.CONGENITAL_DISEASE}
                        name={STUDENT_INFORMATION.CONGENITAL_DISEASE}
                        type="text"
                        size={{ base: "md", md: "md" }}
                        variant="filled"
                        defaultValue={values.student_congenital_disease}
                        placeholder="-"
                      />
                    </Field>
                    <Field
                      as={FormControl}
                      name={STUDENT_INFORMATION.POLICY_CONFIRM}
                      isInvalid={
                        !!errors.student_policy_confirm &&
                        touched.student_policy_confirm
                      }
                      zIndex={100}
                      // mt={4}
                    >
                      <FormLabel size={{ base: "sm", md: "md" }}>
                        นโยบายด้านความปลอดภัย
                      </FormLabel>
                      <FormHelperText fontSize={"sm"} color="gray.500" mt={"-4px"}>
                          ยินยอมให้จัดเก็บข้อมูลเพื่อใช้ประโยชน์ในการจัดกิจกรรมรวมทั้งอนุญาตให้ถ่ายภาพนิ่ง
                          ภาพเคลื่อนไหวหรือการถ่ายทอดสด
                          เพื่อใช้ในการประชาสัมพันธ์และเผยแพร่ทางช่องทางการสื่อสารต่าง
                          ๆ
                        </FormHelperText>
                      <Checkbox
                        id={STUDENT_INFORMATION.POLICY_CONFIRM}
                        name={STUDENT_INFORMATION.POLICY_CONFIRM}
                        // fontWeight="500"
                        defaultChecked={values.student_policy_confirm}
                        mt={4}
                      >
                        ยินยอม
                      </Checkbox>
                      <ErrorMessage
                        name={STUDENT_INFORMATION.POLICY_CONFIRM}
                        component={FormErrorMessage}
                      />
                    </Field>
                  </VStack>
                  <HStack
                    justifyContent={"space-between"}
                    w={"100%"}
                    zIndex={100}
                  >
                    <Button
                      variant="ghost"
                      size={{ base: "sm", md: "md" }}
                      zIndex={100}
                      isDisabled
                      w={20}
                    >
                      ก่อนหน้า
                    </Button>
                    <Indicator />
                    <Button
                      type="submit"
                      colorScheme="blue"
                      isLoading={stepIsOpen}
                      size={{ base: "sm", md: "md" }}
                      zIndex={100}
                      w={20}
                    >
                      ต่อไป
                    </Button>
                  </HStack>
                </VStack>
              </Flex>
            </Form>
          )}
        </Formik>
      )}
      {pageLoading && (
        <VStack w={"100%"}>
          <HStack w={"100%"} justifyContent={"center"}>
            <Skeleton height={8} w={"250px"} borderRadius={"lg"} />
          </HStack>
          <HStack w={"100%"}>
            <Skeleton height={6} w={"100%"} borderRadius={"lg"} />
          </HStack>
          <VStack w={"100%"} mt={4}>
            <Skeleton height={16} w={"100%"} borderRadius={"lg"} />
            <Skeleton height={16} w={"100%"} borderRadius={"lg"} />
            <Skeleton height={16} w={"100%"} borderRadius={"lg"} />
            <Skeleton height={16} w={"100%"} borderRadius={"lg"} />
            <Skeleton height={16} w={"100%"} borderRadius={"lg"} />
            <Skeleton height={16} w={"100%"} borderRadius={"lg"} />
            <Skeleton height={16} w={"100%"} borderRadius={"lg"} />
            <Skeleton height={16} w={"100%"} borderRadius={"lg"} />
            <Skeleton height={16} w={"100%"} borderRadius={"lg"} />
            <Skeleton height={16} w={"100%"} borderRadius={"lg"} />
            <Skeleton height={16} w={"100%"} borderRadius={"lg"} />
          </VStack>
        </VStack>
      )}
    </>
  );
};

export default BasicInformation;
