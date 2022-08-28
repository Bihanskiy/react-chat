

export const loginButtonFeatures = (promise, googleButton, src, id, handleCredentialResponse) => {
    
    promise(src)
        .then(() => {
            /*global google*/
            google.accounts.id.initialize({
                client_id: id,
                callback: handleCredentialResponse,
            })
            google.accounts.id.renderButton(
                googleButton.current,
                { theme: 'outline', size: 'large' }
            )
        })
        .catch(console.error)

}