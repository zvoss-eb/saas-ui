import * as React from 'react'

import {
  forwardRef,
  Select as ChakraSelect,
  SelectProps as ChakraSelectProps,
} from '@chakra-ui/react'

interface Option {
  value: string
  label: string
}

interface NativeSelectOptions {
  options: Option[]
}

export interface NativeSelectProps
  extends ChakraSelectProps,
    NativeSelectOptions {}

export const NativeSelect = forwardRef<NativeSelectProps, 'select'>(
  ({ options, ...props }, ref) => {
    return (
      <ChakraSelect ref={ref} {...props}>
        {options.map(({ value, label }) => {
          return (
            <option key={value} value={value}>
              {label || value}
            </option>
          )
        })}
      </ChakraSelect>
    )
  }
)
