export const buttonGroupContent = () => {
   const btnBoxes = document.querySelectorAll('.button-group-content')

   const changeContent = (data, name) => {
        const contentBlocks = document.querySelectorAll(`[data-tab-name="${name}"]`)

        contentBlocks.forEach(content => {
            content.classList.add('d-none')

            if (content.dataset.tabContent === data) {
                content.classList.remove('d-none')
            }
        })
   }

   btnBoxes.forEach(btnBox => {
        const btns = document.querySelectorAll('.btn-check')
        
        btns.forEach(btn => {
            btn.addEventListener('change', () => {
                changeContent(btn.dataset.tabTarget, btn.name)
            })
        })
   })
}