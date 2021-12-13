import { Box, Text, Link, HStack } from '@chakra-ui/react'
import Footer, { Copyright, FooterLink } from 'components/layout/Footer'

const CustomFooter = () => {
  return (
    <Footer columns={2}>
      <Box>
        <Copyright>
          Saas UI is a product of{' '}
          <FooterLink href="https://appulse.net" target="_blank">
            Appulse
          </FooterLink>
        </Copyright>
      </Box>
      <HStack justify="flex-end" spacing="4">
        <FooterLink href="mailto:hello@saas-ui.dev">Contact</FooterLink>
        <FooterLink href="/privacy">Privacy</FooterLink>
      </HStack>
    </Footer>
  )
}

export default CustomFooter
