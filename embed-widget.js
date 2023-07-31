const id = document.currentScript.getAttribute('data-chatbot-id');
const color1 = document.currentScript.getAttribute('data-color-1') || '#3ABFF7';
const color2 = document.currentScript.getAttribute('data-color-2') || '#0E1729';
const openOnLoad = document.currentScript.hasAttribute('data-open')

let chatOpen = false

function toggleChat() {
	if (chatOpen) {
		document.getElementById(`chatbot-${id}`).style.display = 'none';
	} else {
		document.getElementById(`chatbot-${id}`).style.display = 'block';
	}
	chatOpen = !chatOpen;
}
const html = `
<div style="position:fixed; bottom: 20px; right: 20px; z-index:9999999; overflow: visible;">
    <div style="display: none; border-radius: 12px; overflow: hidden; position: fixed; bottom: 90px; right: 20px; width: 360px; max-width: calc(100% - 44px); height: calc(100vh - 114px); max-height: 600px;" id="chatbot-${id}">
        <iframe src="https://ai-bot-plum.vercel.app/embed/${id}" width="100%" height="100%" style="border: none;" ${(openOnLoad ? 'onload="toggleChat()"' : '')}></iframe>
    </div>
    <div role="button" style="outline: 0; border: none; position: absolute; bottom: 0; right: 0; width:64px; height: 64px;" onclick="toggleChat()">
	<svg clip-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" version="1.1" viewBox="0 0 64 64" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><g><path d="m0 32c0-17.673 14.327-32 32-32s32 14.327 32 32-14.327 32-32 32-32-14.327-32-32z" fill="${color2}"/><path d="m26 16c-5.5228 0-10 4.4772-10 10v12c0 5.5228 4.4772 10 10 10h19.5c1.3807 0 2.5-1.1193 2.5-2.5v-19.5c0-5.5228-4.4772-10-10-10h-12zm-0.75 16c0 1.1046-0.8954 2-2 2s-2-0.8954-2-2 0.8954-2 2-2 2 0.8954 2 2zm8.75 0c0 1.1046-0.8954 2-2 2s-2-0.8954-2-2 0.8954-2 2-2 2 0.8954 2 2zm6.75 2c1.1046 0 2-0.8954 2-2s-0.8954-2-2-2-2 0.8954-2 2 0.8954 2 2 2z" fill="${color1}" fill-rule="evenodd"/></g></svg>
	</div>
</div>
`;
document.addEventListener('DOMContentLoaded', () => {
	const body = document.querySelector('body');
	body.insertAdjacentHTML('beforeend', html);
});