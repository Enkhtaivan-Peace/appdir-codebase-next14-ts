'use client'
import { OrderedList } from '@/components/ui/list/list-ui-utils'
import { DangerText, UnderlineText } from '@/components/ui/typography/typography-utils'
import React from 'react'

const PopupPage = () => {
    return (
        <div>
            <h2>Popup үүсгэхэд анхаарах зүйлс:</h2>
            <OrderedList>
                <li>
                    Аливаа popup нь <DangerText>Global</DangerText> ба <DangerText>Local</DangerText> гэсэн үндсэн 2
                    төрөлтэй байна.
                </li>
                <li>
                    {' '}
                    Popup үүсгэх: <br />
                    <ol>
                        <li>
                            <DangerText>Global</DangerText> popup - ийг{' '}
                            <UnderlineText>common/popup/globalPopup/choices</UnderlineText> хавтаст үүсгэнэ.
                        </li>
                        <li>
                            <DangerText>Local</DangerText> popup - ийг өөрийнх нь feature дотор popup хавтас нээж дотор
                            нь үүсгэх.
                        </li>
                    </ol>
                </li>
                <li>
                    Үүсгэсэн Popup - ийг бүртгэх:
                    <ol>
                        <li>
                            <DangerText>Global</DangerText> popup - ийг{' '}
                            <UnderlineText>common/popup/globalPopup/globalPopupRegistration.ts</UnderlineText> файл
                            дотор зааврын дагуу бүртгэлжүүлнэ.
                        </li>
                        <li>
                            <DangerText>Local</DangerText> popup - ийг{' '}
                            <UnderlineText>common/popup/popupRegistration.ts</UnderlineText> файл дотор зааврын дагуу
                            бүртгэлжүүлнэ.
                        </li>
                    </ol>
                </li>
                <li>
                    Үүсгэсэн Popup component дотроо <DangerText>tailwind-styled-components</DangerText> ашиглахгүй байх.
                    <br />
                    Учир нь бүх popup - уудыг lazy - ээр дуудаж байгаагаас tailwind-config дээрх зарим нэг spacing гэх
                    мэт тохиргоонууд танихгүй байгаа гэж таамаглаж байна.
                    <br />
                    Тиймээс <DangerText>styled-components</DangerText> санг дуудаж popup - ийн css - ийг бичнэ.
                </li>
                <li>
                    Popup - ийг дуудаж харуулах:
                    <ol>
                        <li>
                            Тухайн page - ээ <DangerText>PopupProvider</DangerText> - аар бүрнэ.
                        </li>
                        <li>
                            <ol>
                                <li>
                                    {' '}
                                    Харуулах ui component дотроо хэрэв <UnderlineText>global Popup</UnderlineText>{' '}
                                    харуулах бол <DangerText>useGlobalPopupCtx</DangerText> hook - ээс{' '}
                                    <UnderlineText>showGlobalPopup</UnderlineText> функцийг зааврын дагуу дуудна.
                                </li>
                                <li>
                                    Харуулах ui component дотроо хэрэв <UnderlineText>local Popup</UnderlineText>{' '}
                                    харуулах бол <DangerText>usePopupCtx</DangerText> hook - ээс{' '}
                                    <UnderlineText>showPopup</UnderlineText> функцийг зааврын дагуу дуудна.
                                </li>
                            </ol>
                        </li>
                    </ol>
                </li>
            </OrderedList>
        </div>
    )
}

export default PopupPage
