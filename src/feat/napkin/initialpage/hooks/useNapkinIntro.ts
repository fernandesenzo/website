import { useState } from "react";
import { useNavigate } from "react-router-dom";

function generateRandomAlphaNum(length = 6) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

export function useNapkinIntro() {
    const [code, setCode] = useState("");
    const [isInputComplete, setIsInputComplete] = useState(false);
    const navigate = useNavigate();

    const updateText = (val: string) => {
        const sanitized = val.replace(/[^A-Za-z0-9]/g, '');
        setCode(sanitized.slice(0, 6));
        if (sanitized.slice(0, 6).length !== 6) {
            setIsInputComplete(false);
            return
        }
        setIsInputComplete(true);
    }

    const onRandomClick = () => {
        navigate(`/napkin/${generateRandomAlphaNum(6)}`);
    }
    const onNormalClick = () => {
        navigate(`/napkin/${code}`);
    }

    return {
        code, isInputComplete, updateText, onRandomClick, onNormalClick
    }
}