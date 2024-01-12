export async function signup(
  prevState: string | undefined,
  formData: FormData,
) {

  try {

    //await signIn('credentials', Object.fromEntries(formData));
    console.log('formData', formData);
    return 'Success';

  } catch (error) {
    if ((error as Error).message.includes('CredentialsSignin')) {
      return 'CredentialSignin';
    }
    throw error;
  }
}