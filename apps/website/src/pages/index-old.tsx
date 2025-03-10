import { Box, SimpleGrid } from '@chakra-ui/layout'
import {
  Container,
  Heading,
  Text,
  HStack,
  VStack,
  Stack,
  Link,
  Button,
  useColorModeValue,
  chakra,
  Avatar,
  VisuallyHidden,
  Img,
} from '@chakra-ui/react'

import Hero from '@/components/marketing/hero'
import Features from '@/components/marketing/features'
import CTA from '@/components/marketing/cta'
import Section from '@/components/marketing/section-wrapper'
import SectionTitle from '@/components/marketing/section-title'

import ScaleInView from '@/components/motion/scale-in-view'

import RedwoodJS from '/public/frameworks/redwood.svg'
import NextJS from '/public/frameworks/nextjs.svg'
import Blitz from '/public/frameworks/blitz.svg'
import Supabase from '/public/frameworks/supabase.svg'

import { SignupForm } from '@/components/signup-form'
import { Em, Br } from '@/components/typography'

import { FallInPlace } from '@/components/motion/fall-in-place'

import SEO from '@/components/seo'
import { CheckIcon } from '@chakra-ui/icons'
import { ButtonLink } from '@/components/link'
import { BackgroundGradient } from '@/components/background-gradient'

import {
  FiBox,
  FiCode,
  FiFlag,
  FiLock,
  FiSearch,
  FiTerminal,
  FiToggleLeft,
  FiTrendingUp,
  FiUserPlus,
} from 'react-icons/fi'

const Home = () => {
  return (
    <Box>
      <SEO
        title="Saas UI"
        description="The frontend stack for SaaS companies"
        titleTemplate="%s - The frontend stack for SaaS companies"
      />
      <BackgroundGradient animate={false} />
      <Box mb={8} w="full">
        <Box>
          <Container maxW="4xl" py="40">
            <Hero
              id="home"
              justifyContent="flex-start"
              title={
                <FallInPlace>
                  The <Br display={{ sm: 'inline', lg: 'none' }} /> frontend
                  stack for SaaS companies
                </FallInPlace>
              }
              description={
                <FallInPlace delay={0.4}>
                  Saas UI is an <Em>advanced component library</Em> and{' '}
                  <Em>starter pack</Em> that helps you build essential SaaS
                  functionality <Em>in hours instead of weeks</Em>.
                </FallInPlace>
              }
            >
              <FallInPlace delay={0.8}>
                <Text pt="4" pb="8" color="gray.500">
                  Build with React and Chakra UI
                </Text>

                <Stack direction={['column', 'row']} spacing={4}>
                  <Button
                    colorScheme="primary"
                    onClick={() => {
                      document
                        .getElementById('pricing')
                        .scrollIntoView({ behavior: 'smooth' })
                    }}
                  >
                    Request early access
                  </Button>
                  <Button variant="ghost" as={Link} href="/docs/introduction">
                    View documentation
                  </Button>
                </Stack>
              </FallInPlace>
            </Hero>
          </Container>
          <Box
            height="480px"
            position="relative"
            overflow="hidden"
            width="80vw"
            maxW="1400px"
            margin="0 auto"
          >
            <FallInPlace delay={1}>
              <Img src="/app.png" position="absolute" width="100%" top="0" />
            </FallInPlace>
          </Box>
        </Box>
        <Features
          id="features"
          title="The SaaS SDK"
          description="A set of components, patterns and tools designed with productivity and scalability in mind."
          variant="alternate"
          columns={[1, null, 3]}
          iconSize={4}
          features={[
            {
              title: 'Components.',
              icon: FiBox,
              description:
                'Themable, composable and accessible UI components, including forms, pages, lists, settings, modals and much more.',
              variant: 'inline',
            },
            {
              title: 'Authentication.',
              icon: FiLock,
              description:
                'Authentication screens with passwords, magic links, oauth, OTP and password reset functionality. Build-in support for Supabase, Magic.link and others.',
              variant: 'inline',
            },
            {
              title: 'Onboarding.',
              icon: FiUserPlus,
              description:
                'Add user onboarding flows, like tours, hints and inline documentation without breaking a sweat.',
              variant: 'inline',
            },
            {
              title: 'Feature flags.',
              icon: FiFlag,
              description:
                "Implement feature toggles for your billing plans with easy to use hooks. Connect Flagsmith, or other remote config services once you're ready.",
              variant: 'inline',
            },
            {
              title: 'Upselling.',
              icon: FiTrendingUp,
              description:
                'Components and hooks for upgrade flows designed to make upgrading inside your app frictionless.',
              variant: 'inline',
            },
            {
              title: 'Themes.',
              icon: FiToggleLeft,
              description:
                'Includes multiple themes with darkmode support, always have the perfect starting point for your next project.',
              variant: 'inline',
            },
            {
              title: 'Generators.',
              icon: FiTerminal,
              description:
                'Extend your design system while maintaininig code quality and consistency with build-in generators.',
              variant: 'inline',
            },
            {
              title: 'Monorepo.',
              icon: FiCode,
              description: (
                <>
                  All code is available as packages in a high-performance{' '}
                  <Link href="https://turborepo.com">Turborepo</Link>, you have
                  full control to modify and adjust it to your workflow.
                </>
              ),
              variant: 'inline',
            },
            {
              title: 'Documentation.',
              icon: FiSearch,
              description:
                'Extensively documented, including storybooks, best practices, use-cases and examples.',
              variant: 'inline',
            },
          ]}
          reveal
        />
        <Section innerWidth={['100%', null, 'xl']}>
          <ScaleInView>
            <SectionTitle title="Building SaaS products that work great and look amazing is tough" />
          </ScaleInView>
          <ScaleInView>
            <VStack
              fontSize="lg"
              spacing="8"
              alignItems="flex-start"
              color={useColorModeValue('gray.500', 'gray.400')}
            >
              <Text>
                Building SaaS products requires you to be a generalist on many
                fronts. However many developers aren&apos;t very design savvy
                and vice versa.
              </Text>
              <Text>
                SaaS UI tries to fill this gap by giving developers an extensive
                set of beautifully crafted components build on{' '}
                <Em>best in class tools</Em>. While on the same time serve as a{' '}
                <Em>great foundation</Em> for designers to create their brand.
              </Text>
              <Text>
                With SaaS UI you&apos;ll <Em>save hundreds of hours</Em>{' '}
                building essential functionaly for your product. Time that you
                can use to validate new ideas, find your perfect product market
                fit and build functionality that makes your product unique.
              </Text>
              <Stack direction="row" align="center">
                <Avatar src="/eelco128.jpg" mr="2" size="lg" />
                <VStack align="flex-start" spacing="0">
                  <Em>Eelco Wiersma</Em>
                  <Text fontSize="sm">Founder Saas UI</Text>
                </VStack>
              </Stack>
            </VStack>
          </ScaleInView>
        </Section>

        <Section variant="alternate">
          <ScaleInView>
            <SectionTitle
              title="Plays well with others"
              description="Saas UI is backend agnostic and works with the framework or starter pack that you love."
            />
          </ScaleInView>

          <SimpleGrid
            columns={[2, null, 4]}
            columnGap={8}
            sx={{
              svg: {
                width: '80%',
                height: 'auto',
                maxHeight: '40px',
              },
            }}
          >
            <ScaleInView>
              <Link
                href="https://redwoodjs.com"
                p="8"
                h="100%"
                d="flex"
                sx={{
                  path: {
                    fill: useColorModeValue('#000', '#fff'),
                  },
                }}
              >
                <RedwoodJS alt="RedwoodJS logo" />
                <VisuallyHidden>RedwoodJS</VisuallyHidden>
              </Link>
            </ScaleInView>
            <ScaleInView>
              <Link
                href="https://nextjs.com"
                p="8"
                h="100%"
                d="flex"
                sx={{
                  path: {
                    fill: useColorModeValue('#000', '#fff'),
                  },
                }}
              >
                <NextJS alt="Next.JS logo" />
                <VisuallyHidden>Next.js</VisuallyHidden>
              </Link>
            </ScaleInView>
            <ScaleInView>
              <Link href="https://blitzjs.com" p="8" h="100%" d="flex">
                <Blitz alt="Blitz.js logo" />
                <VisuallyHidden>Blitz.js</VisuallyHidden>
              </Link>
            </ScaleInView>
            <ScaleInView>
              <Link
                href="https://supabase.com"
                p="8"
                h="100%"
                d="flex"
                sx={{
                  'path.supabase_svg__wordmark': {
                    fill: useColorModeValue('#1F1F1F', '#FFF'),
                  },
                }}
              >
                <Supabase
                  alt="Supabase logo"
                  viewBox="0 0 581 113" // somehow this gets removed when importing
                />
                <VisuallyHidden>Supabase</VisuallyHidden>
              </Link>
            </ScaleInView>
          </SimpleGrid>

          <Text
            fontSize="sm"
            opacity="0.4"
            width={['100%', null, '50%']}
            m="0 auto"
            mt="10"
          >
            Technologies included: Next.js, Electron, React, Chakra UI,
            Typescript, Styled Components, Emotion, React Hook Form, React
            Query, Turborepo, Prettier, Storybook, Jest, Testing Library and
            more...
          </Text>
        </Section>

        <Pricing />

        <RequestAccess />

        <Section id="faq">
          <ScaleInView>
            <SectionTitle title="Frequently asked questions" />
          </ScaleInView>

          <SimpleGrid columns={[1, null, 2]} spacing={10}>
            <FaqItem
              question="How many products can I use Saas UI Pro for?"
              answer={
                <>
                  The single license can be used for one commercial application
                  or SaaS product and unlimited internal tools. You can buy as
                  many licenses as you need. <br /> The unlimited license does
                  not have any restrictions.
                </>
              }
            />
            <FaqItem
              question="Can I use Saas UI Pro for client work?"
              answer="Yes, that's totally up to you, as long as it fits the license you purchase."
            />
            <FaqItem
              question="Can I use Saas UI Pro for Open Source projects?"
              answer="No currently not. A large part of Saas UI is already released under MIT license. We try to give back to the community as much as possible."
            />
            <FaqItem
              question="Does Saas UI include Figma, Sketch or other design files?"
              answer="No, Saas UI does not include any design assets. Maintaining design resources costs a lot of extra effort. We believe small teams can move much faster by designing directly in code, with help of Storybooks."
            />
            <FaqItem
              question="Does Saas UI have a Javascript version?"
              answer="No, we believe Typescript is the way to go in order to produce highly productive and qualitative code that scales."
            />
            <FaqItem
              question="What does 'lifetime access' mean?"
              answer="Saas UI Pro is a one-time purchase, with no recurring subscription. You will have access to all assets of the Saas UI library forever."
            />
            <FaqItem
              question="What does 'free updates' include?"
              answer={
                <>
                  We&apos;ll add new components and improvements to the library
                  as we get new ideas and feedback, these updates will always be
                  free for all customers that sign-up for the early access.{' '}
                  <br />
                  <br />
                  We might release different stacks, for example for Vue and
                  backends, these will be sold seperately.
                </>
              }
            />
            <FaqItem
              question="I'm not satisfied, can I get my money back?"
              answer="Yeah, no hard feelings. Saas UI is opinionated and might not suit your style, let us know within 14 days of your purchase and we'll refurn your money."
            />
            <FaqItem
              question="Do you offer technical support?"
              answer={
                <>
                  Once you sign up you get access to our Discord community,
                  where you can ask questions, report bugs or feature requests
                  and get help from other customers. <br />
                  <br />
                  If you require more specialised support or consultancy contact
                  us at{' '}
                  <Link href="mailto:hello@saas-ui.dev">hello@saas-ui.dev</Link>
                </>
              }
            />
          </SimpleGrid>
        </Section>
      </Box>
    </Box>
  )
}

const RequestAccess = () => {
  return (
    <>
      <ScaleInView>
        <CTA
          id="request-access"
          title="Get early access"
          py="14"
          description={
            <>
              <p>
                Not ready to pre-order yet? No worries, we will notify you when
                we launch.
              </p>
            </>
          }
          variant="subtle"
        >
          <Container
            borderRadius="md"
            bg={useColorModeValue('white', 'gray.700')}
            borderWidth="1px"
            borderColor={useColorModeValue('gray.300', 'gray.700')}
            p={8}
            width={['90vw', null, 'md']}
          >
            <SignupForm />
          </Container>
        </CTA>
      </ScaleInView>
    </>
  )
}

const Pricing = () => {
  return (
    <Section id="pricing" pos="relative">
      <BackgroundGradient animate={false} height="100%" />
      <Box zIndex="2" pos="relative">
        <ScaleInView>
          <SectionTitle
            title="Pricing for every stage"
            description="Pay once and get life-time access and free updates to our high quality components."
          ></SectionTitle>
        </ScaleInView>

        <ScaleInView>
          <SimpleGrid columns={[1, null, 3]} spacing={4}>
            <PricingBox
              title="Open Source"
              description="Basic components, perfect to get started."
              price="Free"
            >
              <PricingFeatures>
                <PricingFeature title="MIT License" />
                <PricingFeature title="Authentication (supabase/passport.js)" />
                <PricingFeature title="Forms (react-hook-form)" />
                <PricingFeature title="Modals manager" />
                <PricingFeature title="Hotkeys" />
                <PricingFeature title="Web3 components" />
                <Text fontSize="sm">And much more...</Text>
              </PricingFeatures>
              <ButtonLink href="/docs/introduction" variant="outline" mt="10">
                View documentation
              </ButtonLink>
            </PricingBox>
            <PricingBox
              title="Bootstrap"
              price={
                <HStack>
                  <Text
                    textDecoration="line-through"
                    fontSize="sm"
                    color="gray.400"
                  >
                    €199,-
                  </Text>
                  <Text>€99,-</Text>
                </HStack>
              }
              description="Complete frontend stack for bootstrappers and small teams."
              borderColor="primary.500"
              boxShadow="md"
            >
              <PricingFeatures>
                <PricingFeature title="One project" />
                <PricingFeature title="One developer" />
                <PricingFeature title="Advanced components" />
                <PricingFeature title="Multiple themes" />
                <PricingFeature title="Next.js and Electron boilerplates" />
                <PricingFeature title="Free updates" />
                <br />
                <PricingFeature
                  title="Private beta access"
                  iconColor="green.500"
                />
              </PricingFeatures>
              <ButtonLink
                colorScheme="primary"
                href="https://appulse.gumroad.com/l/saas-ui-pro-pre-order?variant=Single%20license"
                className="gumroad-button"
                onClick={() =>
                  /* @ts-ignore */
                  window?.woopra.track('Order Bootstrap')
                }
              >
                Pre-order
              </ButtonLink>
            </PricingBox>
            <PricingBox
              title="Startup"
              price={
                <HStack>
                  <Text
                    textDecoration="line-through"
                    fontSize="sm"
                    color="gray.400"
                  >
                    €999,-
                  </Text>
                  <Text>€499,-</Text>
                </HStack>
              }
              description="Unlimited license for growing teams."
            >
              <PricingFeatures>
                <PricingFeature title="Unlimited projects" />
                <PricingFeature title="Unlimited developers" />
                <PricingFeature title="Everything from Bootstrap" />
                <br />
                <PricingFeature
                  title="Private beta access"
                  iconColor="green.500"
                />
              </PricingFeatures>
              <ButtonLink
                colorScheme="primary"
                href="https://appulse.gumroad.com/l/saas-ui-pro-pre-order?variant=Unlimited%20license"
                className="gumroad-button"
                onClick={() =>
                  /* @ts-ignore */
                  window?.woopra.track('Order Startup')
                }
              >
                Pre-order
              </ButtonLink>
            </PricingBox>
          </SimpleGrid>

          <Text
            p="8"
            textAlign="center"
            color={useColorModeValue('gray.500', 'gray.400')}
          >
            VAT may be applicable depending on your location.
          </Text>
        </ScaleInView>
      </Box>
    </Section>
  )
}

const PricingFeatures = ({ children }) => {
  return (
    <VStack
      align="stretch"
      justifyContent="stretch"
      spacing="4"
      mb="8"
      flex="1"
    >
      {children}
    </VStack>
  )
}

const PricingFeature = ({ title, iconColor = 'primary.500' }) => {
  return (
    <HStack>
      <CheckIcon color={iconColor} />{' '}
      <Text flex="1" fontSize="sm">
        {title}
      </Text>
    </HStack>
  )
}

const PricingBox = ({ title, description, price, children, ...props }) => {
  return (
    <VStack
      zIndex="2"
      bg={useColorModeValue('whiteAlpha.600', 'blackAlpha.300')}
      borderRadius="md"
      p="8"
      flex="1 0"
      alignItems="stretch"
      border="1px solid"
      borderColor={useColorModeValue('gray.400', 'gray.800')}
      {...props}
    >
      <Heading as="h3" size="md" fontWeight="bold" fontSize="lg" mb="2">
        {title}
      </Heading>
      <Box color={useColorModeValue('gray.500', 'gray.400')}>{description}</Box>
      <Box fontSize="2xl" fontWeight="bold" py="4">
        {price}
      </Box>
      <VStack align="stretch" justifyContent="stretch" spacing="4" flex="1">
        {children}
      </VStack>
    </VStack>
  )
}

const FaqItem = ({ question, answer }: any) => {
  return (
    <ScaleInView>
      <chakra.dl>
        <chakra.dt fontWeight="semibold">{question}</chakra.dt>
        <chakra.dd color={useColorModeValue('gray.500', 'gray.400')}>
          {answer}
        </chakra.dd>
      </chakra.dl>
    </ScaleInView>
  )
}

export default Home

export async function getStaticProps() {
  return {
    props: {
      header: {
        position: 'fixed',
        variant: 'dark',
      },
    },
  }
}
