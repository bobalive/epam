import {Input} from "../../../shared/ui/Input/Input.tsx";
import {Button} from "../../../shared/ui/Button/Button.tsx";
import {useEffect, useState} from 'react'
import s from './Tool.module.scss'
import {ToolInterface} from "./Tool.interface.ts";

export const Tool = ({id,name, color, submit,type ,children}: ToolInterface) => {
    const [carName, setCarName] = useState<string>(name)
    const [carColor, setCarColor] = useState<string>(color)
    useEffect(() => {
        setCarName(name)
        setCarColor(color)
    }, [name,color]);
    return (
            <div className={s.toolBox}>
            <Input type={type}
                   value={carName}
                   setValue={(value: string) => setCarName(value)}
                   placeholder={'Cars name'}/>
            <input
                type='color'
                value={carColor}
                className={s.color}
                onChange={(e)=>setCarColor(e.target.value)}
                disabled={type=='disabled'}
            />
            <Button
                type={'submit'}
                state={type}
                onClick={() => {
                    submit(carColor ,carName , id||-1)
                    setCarColor('')
                    setCarName('')
                }}
            >{children}</Button>
        </div>
    )
}