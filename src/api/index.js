import axios from '../config/axios'

export const modelApi = {
    /**
     * 获取模型
     * @returns {Promise<axios.AxiosResponse<any>>}
     */
    getModels() {
        return axios.get('/models')
    },
    /**
     * 聊天
     * @param {string} body.model - 要使用的模型的ID
     * @param {Array<object>} body.messages - 以聊天格式生成聊天完成的消息
     * @param {string} body.messages.role - 消息的角色
     * @param {string} body.messages.content - 消息的内容
     * @param {number} [body.temperature] - 使用什么采样温度，介于 0 和 2 之间。较高的值（如 0.8）将使输出更加随机，而较低的值（如 0.2）将使输出更加集中和确定。
     * @param {boolean} [body.stream] - 是否以流的形式发送部分消息增量
     */
    chat (body) {
        return axios.post('/chat/completions', body)
    }
}
