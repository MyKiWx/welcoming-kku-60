"use client";

import { Box, Text } from "@chakra-ui/react";

type Props = {
  title: string;
  title2?: string;
  sub_title?: string;
};

const HeaderContent = ({ title, title2, sub_title }: Props) => {
  return (
    <>
      <Box>
        <Text
          fontSize={{ base: "xl", md: "2xl" }}
          fontWeight="bold"
          textAlign="center"
          w="full"
        >
          {title} <br />
          {title2}
        </Text>
        {sub_title && (
          <>
            <Text
              fontSize={{ base: "xs", md: "sm" }}
              fontWeight="normal"
              color="red.500"
              textAlign="center"
              w="full"
            >
              *{sub_title}
            </Text>
          </>
        )}
      </Box>
    </>
  );
};

export default HeaderContent;
