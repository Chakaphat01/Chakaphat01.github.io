import { Input,Form,Select,Button } from 'antd';
import styles from "../styles/Register.module.css"
function Register() {
    const {Option} = Select;
    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
          <Select style={{ width: 70 , backgroundColor:"white" , borderRadius:"20px"}}>
            <Option value="86">+86</Option>
            <Option value="87">+87</Option>
            <Option value="66">+66</Option>
          </Select>
        </Form.Item>
      );
    return(
        <div className={styles.big_page}>
            <div className={styles.page01}>
                      <img className={styles.img_page01} src="src/img/img_page01.jpg"  />              
            </div>
            <div className={styles.page02}>
                <div className="flex justify-between ">
                    <h1 className="text-[29px]"> Registration </h1>
                    <div className="flex gap-[10px]">
                        <img className="rounded-[50%]" src='src/img/you can have multiple logos, so having one of each….jpg' width={50} />
                        <img className="rounded-[50%]" src='src/img/you can have multiple logos, so having one of each….jpg' width={50} />
                    </div>                    
                </div>
                <div className={styles.form}>
                    <div>
                        <div>Full name</div>
                        <Form.Item>
                        <Input placeholder="Basic usage" />
                        </Form.Item>
                    </div>
                    <div>
                        <div>Password</div>
                        <Form.Item
                            name="password"
                            hasFeedback
                            >
                            <Input.Password placeholder="Please enter your" />
                        </Form.Item>
                    </div>
                    <div>
                        <div>Confirm password</div>
                        <Form.Item
                            name="confirm"
                            dependencies={['password']}
                            hasFeedback
                            >
                            <Input.Password placeholder="Please enter your"/>
                        </Form.Item>
                    </div>
                    <div>
                        <div> Gender </div>
                        <Form.Item name="gender">
                            <Select
                            placeholder="Select a option and change input text above"
                            allowClear
                            >
                            <Option value="male">male</Option>
                            <Option value="female">female</Option>
                            <Option value="other">other</Option>
                            </Select>
                        </Form.Item>
                    </div>
                    <div>
                        <div> Email </div>
                        <Form.Item name={['user', 'email']} >
                            <Input placeholder="Email"/>
                        </Form.Item>
                    </div>
                    <div>
                        <div> Phone number</div>
                        <Form.Item
                            name="phone"
                        >
                            <Input addonBefore={prefixSelector} style={{ width: '100%' }} placeholder="Phone number" />
                        </Form.Item>
                    </div>
                    <div>
                        <div>Country</div>
                        <Form.Item>
                        <Input placeholder="Please enter your" />
                        </Form.Item>
                    </div>
                    <div>
                        <div>City</div>
                        <Form.Item>
                        <Input placeholder="Please enter your" />
                        </Form.Item>
                    </div>
                </div>
                <div className={styles.btn_position}>
                    <Button color="default" variant="solid">
                        Submit
                    </Button>
                </div>
            </div>
        </div>
    )
}
export default Register;