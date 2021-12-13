import { Fragment } from 'react'
import {
  Box,
  BoxProps,
  Stack,
  VStack,
  SimpleGrid,
  Heading,
  Text,
} from '@chakra-ui/layout'
import {
  Icon,
  Circle,
  ResponsiveValue,
  useMultiStyleConfig,
  ThemingProps,
} from '@chakra-ui/react'
import SectionWrapper, {
  SectionProps,
} from 'components/marketing/SectionWrapper'
import SectionTitle, {
  SectionTitleProps,
} from 'components/marketing/SectionTitle'

import ScaleInView from 'components/motion/ScaleInView'

export interface FeaturesProps extends ThemingProps<'Features'> {
  title: React.ReactNode
  description?: React.ReactNode
  features: Array<FeatureProps>
  columns?: ResponsiveValue<number>
  spacing?: string | number
  aside?: React.ReactChild
  reveal?: boolean
}

export interface FeatureProps {
  title: React.ReactNode
  description: React.ReactNode
  icon?: any
  iconPosition?: 'left' | 'top'
  iconSize?: number | string
  ip?: 'left' | 'top'
  variant?: string
}

export function Feature({
  title,
  description,
  icon,
  iconPosition,
  iconSize = 8,
  ip,
  variant,
}: FeatureProps) {
  const styles = useMultiStyleConfig('Feature', { variant })

  const pos = iconPosition || ip
  const direction = pos === 'left' ? 'row' : 'column'
  console.log(styles, variant)
  return (
    <Stack sx={styles.container}>
      {icon && (
        <Circle sx={styles.icon}>
          <Icon as={icon} boxSize={iconSize} />
        </Circle>
      )}
      <Box>
        <Heading sx={styles.title}>{title}</Heading>
        <Text sx={styles.description}>{description}</Text>
      </Box>
    </Stack>
  )
}

export default function Features({
  title,
  description,
  features,
  columns = [1, 2, 3],
  spacing = 8,
  align = 'center',
  aside,
  reveal,
  ...props
}: FeaturesProps & SectionTitleProps) {
  if (!!aside) {
    align = 'left'
  }
  const ip = align === 'left' ? 'left' : 'top'

  let Wrap: React.FunctionComponent = Fragment
  if (reveal) {
    Wrap = ScaleInView
  }

  return (
    <SectionWrapper {...props}>
      <Stack direction="row" height="full" align="flex-start">
        <VStack flex="1" spacing={[4, null, 8]} alignItems="stretch">
          <Wrap>
            <SectionTitle
              title={title}
              description={description}
              align={align}
            />
          </Wrap>
          <SimpleGrid columns={columns} spacing={spacing}>
            {features.map((feature, i) => {
              return (
                <Wrap key={i}>
                  <Feature {...feature} ip={ip} />
                </Wrap>
              )
            })}
          </SimpleGrid>
        </VStack>
        {aside && (
          <Box flex="1" p="8">
            {aside}
          </Box>
        )}
      </Stack>
    </SectionWrapper>
  )
}
