import { Button } from '@chakra-ui/button'
import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/form-control'
import { Input } from '@chakra-ui/input'
import { Box, Flex, Text } from '@chakra-ui/layout'
import { Field, Form, Formik } from 'formik'
import { useRouter } from 'next/router'
import React from 'react'
import { useData } from '../state/DataProvider'
import loginApi from '../utils/loginApi'

const login = () => {
    const {_, dispatch} = useData()
    const router = useRouter()
    let formError="";
    function validateName(value) {
        let error
        if (!value) {
          error = "Name is required"
        } 
        return error
      }
    function validatePassword(value) {
        let error
        if (!value) {
            error = "Password is required"
        }
        return error
    }
    return (
        <Box mx="auto" width="40%">
            <Formik
                initialValues={{ name: "", password: "" }}
                onSubmit={async (values, actions) => {
                    try {
                        const res = await loginApi(values.name,values.password)
                        dispatch({
                            type: "LOGIN",
                            payload: res
                        })
                        console.log(res)
                        router.push('/')
                    } catch (error) {
                        formError = "name or password invalid"
                    }
                    
                    
                }}
            >
                {(props) => (
                    <Form>
                        <Field name="name" validate={validateName}>
                        {({ field, form }) => (
                            <FormControl isInvalid={form.errors.name && form.touched.name}>
                                <FormLabel htmlFor="name">name</FormLabel>
                                <Input {...field} id="name" placeholder="name" />
                                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                            </FormControl>
                        )}
                        </Field>
                        <Field name="password" validate={validatePassword}>
                        {({ field, form }) => (
                            <FormControl isInvalid={form.errors.password && form.touched.password}>
                                <FormLabel htmlFor="password">Password</FormLabel>
                                <Input {...field} id="password" placeholder="password" type="password" />
                                <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                            </FormControl>
                        )}
                        </Field>
                        <Text color="red">{formError}</Text>
                        <Flex>
                            <Button
                                mt={4}
                                ml="auto"
                                colorScheme="teal"
                                isLoading={props.isSubmitting}
                                type="submit"
                            >
                                Submit
                            </Button>
                        </Flex>
                    </Form>
                )}
            </Formik>
        </Box>
    )
}

export default login
