/*
 * Ngân hàng câu hỏi K21.
 * key là mã đáp án cố định dùng nội bộ; thứ tự hiển thị sẽ được xáo trộn mỗi lượt.
 * Có thể thêm câu mới bằng cách sao chép một object và giữ đúng cấu trúc này.
 */
window.QUESTION_BANK = [
  {
    id: "k21-01",
    topic: "Tài chính y tế",
    question: "Hình thức chi trả viện phí trực tiếp từ tiền túi hộ gia đình có hạn chế gì?",
    options: [
      { id: "a", text: "Tạo gánh nặng tài chính, có thể dẫn đến nghèo hóa vì chi phí y tế." },
      { id: "b", text: "Giúp bệnh viện tăng thu nhập ổn định và bền vững trong mọi hoàn cảnh." },
      { id: "c", text: "Đảm bảo công bằng trong tiếp cận dịch vụ khám chữa bệnh." },
      { id: "d", text: "Không ảnh hưởng đến tình trạng tài chính của hộ gia đình." }
    ],
    answer: "a",
    explanation: "Khi phải tự thanh toán trực tiếp, người bệnh và gia đình gánh chịu rủi ro tài chính lớn. Chi phí điều trị cao có thể khiến hộ gia đình phải vay nợ, giảm chi tiêu thiết yếu hoặc rơi vào nghèo đói.",
    source: "Đề K21 · câu về chi trả viện phí từ tiền túi; giải thích bổ sung vì 6 PDF bài giảng không trình bày trực tiếp khái niệm này."
  },
  {
    id: "k21-02",
    topic: "Bảo hiểm y tế",
    question: "Trong công thức tính phí bảo hiểm y tế K = P × C + M, chữ P biểu thị yếu tố nào?",
    options: [
      { id: "a", text: "Xác suất mắc bệnh hoặc phát sinh nhu cầu sử dụng dịch vụ trong cộng đồng." },
      { id: "b", text: "Chi phí điều trị trung bình của bệnh nhân." },
      { id: "c", text: "Phần trăm chi phí quản lý quỹ bảo hiểm." },
      { id: "d", text: "Quyền lợi được hưởng của người tham gia." }
    ],
    answer: "a",
    explanation: "P biểu thị xác suất hoặc tần suất phát sinh nhu cầu chăm sóc. C là chi phí cho mỗi trường hợp; M biểu thị phần chi phí quản lý theo cách ký hiệu của đề.",
    source: "Đề K21 · câu về công thức K = P × C + M; công thức được cung cấp trong đề, không thấy trực tiếp trong 6 PDF bài giảng."
  },
  {
    id: "k21-03",
    topic: "Mô hình hệ thống y tế",
    question: "Mô hình Beveridge được đặc trưng bởi nguồn tài chính chủ yếu từ đâu?",
    options: [
      { id: "a", text: "Phí dịch vụ được bệnh nhân trực tiếp chi trả." },
      { id: "b", text: "Đóng góp của người lao động và người sử dụng lao động." },
      { id: "c", text: "Thuế chung do Nhà nước thu và phân bổ." },
      { id: "d", text: "Tất cả các nguồn trên đều là nguồn tài chính chủ yếu đặc trưng của mô hình." }
    ],
    answer: "c",
    explanation: "Mô hình Beveridge chủ yếu tài trợ hệ thống y tế bằng nguồn thu thuế chung. Nhà nước thường đóng vai trò lớn trong việc tổ chức, cung ứng hoặc chi trả cho dịch vụ y tế.",
    source: "Đề K21 · câu về mô hình Beveridge; khái niệm này không thấy trực tiếp trong 6 PDF bài giảng đã gửi."
  },
  {
    id: "k21-04",
    topic: "Chỉ số sức khỏe",
    question: "DALY được sử dụng để đo lường vấn đề gì?",
    options: [
      { id: "a", text: "Tốc độ tăng trưởng chi tiêu y tế toàn cầu." },
      { id: "b", text: "Số tiền chi tiêu y tế bình quân đầu người trong năm." },
      { id: "c", text: "Số năm sống điều chỉnh theo chất lượng cuộc sống (QALY)." },
      { id: "d", text: "Gánh nặng bệnh tật, tính bằng số năm sống khỏe mạnh bị mất." }
    ],
    answer: "d",
    explanation: "DALY (disability-adjusted life year) đo gánh nặng bệnh tật dưới dạng số năm sống khỏe mạnh bị mất do tử vong sớm và sống trong tình trạng bệnh tật hoặc khuyết tật. DALY khác với QALY.",
    source: "Đề K21 · câu về DALY; khái niệm này không thấy trực tiếp trong 6 PDF bài giảng đã gửi."
  },
  {
    id: "k21-05",
    topic: "Bài tập bảo hiểm y tế",
    question: "Một cộng đồng có 10.000 người; 30% là người già và trẻ em. Xác suất sử dụng dịch vụ y tế hằng năm ở nhóm này là 20%, nhóm còn lại là 10%. Chi phí trung bình mỗi lượt là 500.000 đồng, phí quản lý bằng 8% chi phí khám chữa bệnh dự kiến. Mức phí bình quân đầu người là bao nhiêu?",
    options: [
      { id: "a", text: "118.600 đồng." },
      { id: "b", text: "70.200 đồng." },
      { id: "c", text: "42.120 đồng." },
      { id: "d", text: "91.000 đồng." }
    ],
    answer: "b",
    explanation: "Số lượt dự kiến = 3.000 × 20% + 7.000 × 10% = 1.300 lượt. Tổng chi phí dự kiến = 1.300 × 500.000 = 650.000.000 đồng, tương đương 65.000 đồng/người. Cộng phí quản lý 8%: 65.000 × 1,08 = 70.200 đồng/người.",
    source: "Đề K21 · bài tập tính mức phí BHYT bắt buộc; công thức và dữ kiện lấy từ đề, không thấy trực tiếp trong 6 PDF bài giảng."
  },
  {
    id: "k21-06",
    topic: "Hiệu suất",
    question: "Chỉ tiêu nào phù hợp để đo lường hiệu suất sử dụng nguồn lực nhân lực trong y tế?",
    options: [
      { id: "a", text: "Số lượng bác sĩ, điều dưỡng trên một nghìn dân." },
      { id: "b", text: "Chi phí y tế trung bình của một người dân." },
      { id: "c", text: "Số bệnh nhân được phục vụ trên mỗi đơn vị nhân lực y tế." },
      { id: "d", text: "Tổng số giờ làm việc của nhân viên y tế trong một tuần." }
    ],
    answer: "c",
    explanation: "Hiệu suất xem xét mối quan hệ giữa đầu ra và nguồn lực đầu vào. Số bệnh nhân được phục vụ trên mỗi đơn vị nhân lực thể hiện đầu ra tương ứng với nguồn lực đã sử dụng.",
    source: "Đề K21 · câu về hiệu suất sử dụng nguồn lực; đối chiếu: (SLIDE) Chương 3, PDF tr. 4–6 (hiệu suất và đầu ra trên nguồn lực)."
  },
  {
    id: "k21-07",
    topic: "Hiệu quả điều trị",
    question: "Để đánh giá kết quả điều trị, nhóm chỉ tiêu nào dưới đây phù hợp nhất trong các lựa chọn?",
    options: [
      { id: "a", text: "Tỷ lệ điều trị thành công và số lượng bác sĩ tham gia điều trị." },
      { id: "b", text: "Tỷ lệ điều trị thành công; chi phí trên mỗi bệnh nhân điều trị thành công; tỷ lệ tái nhập viện; thời gian phục hồi trung bình; tỷ lệ biến chứng, sai sót y khoa." },
      { id: "c", text: "Tỷ lệ điều trị thành công; số lượng thiết bị y tế được mua sắm trong năm; tỷ lệ biến chứng." },
      { id: "d", text: "Tỷ lệ điều trị thành công; mức độ hài lòng với cơ sở vật chất; số lượng giường bệnh." }
    ],
    answer: "b",
    explanation: "Các chỉ tiêu như thành công điều trị, tái nhập viện, thời gian phục hồi và biến chứng phản ánh kết quả lâm sàng. Chi phí trên mỗi ca điều trị thành công bổ sung góc nhìn kinh tế; số bác sĩ, thiết bị và giường bệnh chủ yếu phản ánh nguồn lực đầu vào.",
    source: "Đề K21 · câu về chỉ tiêu kết quả điều trị; đối chiếu: (SLIDE) Chương 3, PDF tr. 18–20 (hiệu quả và hiệu quả kỹ thuật trong y tế)."
  },
  {
    id: "k21-08",
    topic: "Phân bổ nguồn lực",
    question: "Khi nguồn lực y tế hạn chế, cách tiếp cận nào phù hợp nhất với lý thuyết phân bổ nguồn lực?",
    options: [
      { id: "a", text: "Phân bổ theo yêu cầu của nhóm dân số lớn và chỉ ưu tiên can thiệp có chi phí thấp nhất." },
      { id: "b", text: "Ưu tiên cơ sở có nhiều bệnh nhân để tối đa hóa số lượt điều trị." },
      { id: "c", text: "Dùng các tiêu chí như gánh nặng bệnh tật và hiệu quả lâm sàng để ưu tiên nhóm có nguy cơ cao." },
      { id: "d", text: "Phân bổ theo yêu cầu của tổ chức y tế và mức độ sẵn có của thiết bị." }
    ],
    answer: "c",
    explanation: "Khi nguồn lực khan hiếm, cần cân nhắc nhu cầu sức khỏe, gánh nặng bệnh tật, lợi ích lâm sàng và công bằng. Không nên chỉ dựa vào số bệnh nhân, chi phí thấp nhất hoặc khả năng sẵn có của thiết bị.",
    source: "Đề K21 · câu về phân bổ nguồn lực khan hiếm; đối chiếu: (SLIDE) Chương 3, PDF tr. 43–48 (phân bổ theo ưu tiên, công bằng và vai trò Nhà nước)."
  },
  {
    id: "k21-09",
    topic: "Vai trò Nhà nước",
    question: "Phát biểu nào thể hiện đúng vai trò của Nhà nước trong phân bổ nguồn lực y tế?",
    options: [
      { id: "a", text: "Tập trung ngân sách cho bệnh viện lớn và không kiểm soát giá thuốc ở khu vực tư nhân." },
      { id: "b", text: "Phát triển hạ tầng y tế chủ yếu dựa vào nguồn thu viện phí." },
      { id: "c", text: "Ưu tiên trạm y tế cơ sở ở vùng nông thôn, miền núi để bảo đảm chăm sóc cơ bản cho người nghèo, đồng thời kiểm soát giá thuốc để hỗ trợ khả năng tiếp cận." },
      { id: "d", text: "Khuyến khích tư nhân tham gia cung ứng dịch vụ nhưng không quy định cụ thể về giá cả." }
    ],
    answer: "c",
    explanation: "Vai trò của Nhà nước bao gồm điều tiết thị trường và phân bổ nguồn lực theo mục tiêu sức khỏe cộng đồng, công bằng và tiếp cận dịch vụ thiết yếu, nhất là với nhóm dễ bị tổn thương.",
    source: "Đề K21 · câu về vai trò Nhà nước; đối chiếu: (SLIDE) Chương 3, PDF tr. 42–48 (phân bổ phi thị trường và vai trò Nhà nước)."
  },
  {
    id: "k21-10",
    topic: "Đại cương kinh tế y tế",
    question: "Kinh tế y tế tập trung chủ yếu vào vấn đề nào?",
    options: [
      { id: "a", text: "Sử dụng hiệu quả các nguồn lực khan hiếm để đáp ứng nhu cầu chăm sóc sức khỏe." },
      { id: "b", text: "Tối đa hóa lợi nhuận của cơ sở y tế công lập." },
      { id: "c", text: "Chỉ tăng số lượng bệnh viện trong xã hội." },
      { id: "d", text: "Chỉ thống kê chi tiêu y tế của hộ gia đình và cộng đồng." }
    ],
    answer: "a",
    explanation: "Kinh tế y tế vận dụng tư duy kinh tế để xem xét cách sử dụng nguồn lực có giới hạn, lựa chọn giữa các phương án và cân bằng giữa hiệu quả, công bằng cùng nhu cầu sức khỏe.",
    source: "Đề K21 · câu về khái niệm kinh tế y tế; đối chiếu: (SLIDE) Chương 1, PDF tr. 41–44."
  },
  {
    id: "k21-11",
    topic: "Bảo hiểm y tế xã hội",
    question: "Nguyên tắc hoạt động cơ bản của bảo hiểm y tế xã hội là gì?",
    options: [
      { id: "a", text: "Đóng góp tự nguyện, quyền lợi phụ thuộc hoàn toàn vào mức đóng." },
      { id: "b", text: "Đóng góp theo khả năng, hưởng theo nhu cầu khám chữa bệnh." },
      { id: "c", text: "Đóng góp theo thu nhập, quyền lợi hoàn toàn phụ thuộc vào mức thuế đã nộp." },
      { id: "d", text: "Đóng góp theo thị trường, hưởng theo năng lực tài chính." }
    ],
    answer: "b",
    explanation: "Bảo hiểm y tế xã hội dựa trên nguyên tắc chia sẻ rủi ro: mức đóng gắn với khả năng đóng góp, trong khi việc sử dụng dịch vụ căn cứ vào nhu cầu sức khỏe và quy định quyền lợi.",
    source: "Đề K21 · câu về nguyên tắc BHYT xã hội; không thấy trình bày trực tiếp trong 6 PDF bài giảng đã gửi."
  },
  {
    id: "k21-12",
    topic: "Nguyên tắc cộng đồng",
    question: "Tính cộng đồng trong bảo hiểm y tế được hiểu như thế nào?",
    options: [
      { id: "a", text: "Mọi người cùng đóng góp và cùng chia sẻ rủi ro, chi phí chăm sóc sức khỏe." },
      { id: "b", text: "Chỉ nhóm thu nhập thấp được tham gia quỹ." },
      { id: "c", text: "Toàn bộ mức phí đều do ngân sách Nhà nước chi trả." },
      { id: "d", text: "Mức phí phụ thuộc hoàn toàn vào tuổi của người tham gia." }
    ],
    answer: "a",
    explanation: "Tính cộng đồng thể hiện ở việc nhiều người cùng góp vào quỹ và chia sẻ rủi ro tài chính. Người khỏe góp phần chi trả cho người cần điều trị; mức hưởng không đơn thuần bằng số tiền cá nhân đã đóng.",
    source: "Đề K21 · câu về tính cộng đồng trong BHYT; không thấy trình bày trực tiếp trong 6 PDF bài giảng đã gửi."
  },
  {
    id: "k21-13",
    topic: "Bài tập bảo hiểm y tế",
    question: "Nếu xác suất ốm P = 20%, chi phí điều trị C = 2.000.000 đồng và chi phí quản lý bằng 8% chi phí điều trị dự kiến, mức phí K là bao nhiêu?",
    options: [
      { id: "a", text: "400.000 đồng." },
      { id: "b", text: "432.000 đồng." },
      { id: "c", text: "480.000 đồng." },
      { id: "d", text: "500.000 đồng." }
    ],
    answer: "b",
    explanation: "Chi phí điều trị kỳ vọng = 20% × 2.000.000 = 400.000 đồng. Chi phí quản lý = 8% × 400.000 = 32.000 đồng. Tổng phí = 400.000 + 32.000 = 432.000 đồng.",
    source: "Đề K21 · bài tập tính phí K = P × C + M; công thức lấy từ đề, không thấy trực tiếp trong 6 PDF bài giảng."
  },
  {
    id: "k21-14",
    topic: "Bảo hiểm y tế xã hội",
    question: "Bảo hiểm y tế xã hội thường được áp dụng theo hình thức nào?",
    options: [
      { id: "a", text: "Tự nguyện cho mọi đối tượng, không có quy định pháp luật." },
      { id: "b", text: "Bắt buộc theo quy định pháp luật đối với các nhóm thuộc diện tham gia." },
      { id: "c", text: "Chỉ dành cho công chức nhà nước." },
      { id: "d", text: "Chỉ dành cho người làm việc trong doanh nghiệp tư nhân." }
    ],
    answer: "b",
    explanation: "Bảo hiểm y tế xã hội thường được luật hóa với phạm vi tham gia bắt buộc theo các nhóm đối tượng, nhằm mở rộng bao phủ và chia sẻ rủi ro trong cộng đồng.",
    source: "Đề K21 · câu về BHYT xã hội bắt buộc; không thấy trình bày trực tiếp trong 6 PDF bài giảng đã gửi."
  },
  {
    id: "k21-15",
    topic: "Phân tích kinh tế y tế",
    question: "Hai phương pháp điều trị COPD có chi phí lần lượt là 300.000 đồng và 350.000 đồng mỗi đợt, đồng thời giúp ngăn ngừa biến chứng trong 6 tháng và 6,5 tháng. Loại phân tích kinh tế nào phù hợp nhất với dữ kiện này?",
    options: [
      { id: "a", text: "Phân tích chi phí – thỏa dụng (CUA)." },
      { id: "b", text: "Phân tích tối thiểu hóa chi phí (CMA)." },
      { id: "c", text: "Phân tích chi phí – hiệu quả (CEA)." },
      { id: "d", text: "Phân tích chi phí – lợi ích (CBA)." }
    ],
    answer: "c",
    explanation: "Hai phương án có chi phí khác nhau và kết quả được biểu thị bằng một đơn vị hiệu quả lâm sàng cụ thể (thời gian ngăn ngừa biến chứng). CEA so sánh chi phí với kết quả sức khỏe đo bằng đơn vị tự nhiên. CMA chỉ phù hợp khi kết quả tương đương.",
    source: "Đề K21 · tình huống so sánh phương pháp điều trị COPD; đối chiếu khái quát về phân tích chi phí–hiệu quả: (SLIDE) Chương 1, PDF tr. 43–44; chi phí dịch vụ: Phân tích chi phí kinh tế trong y tế, PDF tr. 26."
  },
  {
    id: "k21-16",
    topic: "Thanh toán dịch vụ y tế",
    question: "Trong bối cảnh chi trả theo định suất, thuật ngữ “hớt váng” (cream skimming) mô tả hành vi nào?",
    options: [
      { id: "a", text: "Ưu tiên chọn bệnh nhân tương đối khỏe, có chi phí điều trị thấp để tối đa hóa lợi ích tài chính." },
      { id: "b", text: "Mở rộng dịch vụ kỹ thuật cao chủ yếu để điều trị nhóm bệnh nhân nặng." },
      { id: "c", text: "Tăng chi cho dự phòng để giảm số lượt nhập viện." },
      { id: "d", text: "Chia sẻ đồng đều mọi chi phí giữa tất cả các cơ sở y tế." }
    ],
    answer: "a",
    explanation: "Cream skimming là xu hướng lựa chọn người bệnh có rủi ro hoặc chi phí dự kiến thấp, tránh nhóm cần nhiều nguồn lực. Hành vi này có thể làm giảm công bằng trong tiếp cận dịch vụ.",
    source: "Đề K21 · câu về “hớt váng” (cream skimming); thuật ngữ này không thấy trực tiếp trong 6 PDF bài giảng đã gửi."
  },
  {
    id: "k21-17",
    topic: "Bài tập xác suất",
    question: "Một cộng đồng có 15.000 người: trẻ em chiếm 20%, người già 10%, người trưởng thành 70%. Xác suất sử dụng dịch vụ y tế hằng năm tương ứng là 25%, 40% và 15%. Xác suất sử dụng chung của toàn cộng đồng là bao nhiêu?",
    options: [
      { id: "a", text: "20,5%." },
      { id: "b", text: "22,5%." },
      { id: "c", text: "19,5%." },
      { id: "d", text: "25,0%." }
    ],
    answer: "c",
    explanation: "Xác suất chung là trung bình có trọng số: 20% × 25% + 10% × 40% + 70% × 15% = 5% + 4% + 10,5% = 19,5%.",
    source: "Đề K21 · bài tập xác suất sử dụng dịch vụ y tế; tính toán theo dữ kiện của đề, không có công thức xác suất có trọng số trình bày trực tiếp trong 6 PDF."
  },
  {
    id: "k21-18",
    topic: "Đánh giá hoạt động y tế",
    question: "Nội dung nào sau đây không phải là mục đích chính trực tiếp của đánh giá thực hiện kế hoạch tài chính y tế?",
    options: [
      { id: "a", text: "Xem kế hoạch đề ra đã được thực hiện như thế nào." },
      { id: "b", text: "Đánh giá mức độ đạt được các mục tiêu." },
      { id: "c", text: "Xem kết quả đạt được có tương xứng với nguồn lực đã sử dụng không." },
      { id: "d", text: "Đào tạo và phát triển nhân lực như một hoạt động độc lập với đánh giá kế hoạch." }
    ],
    answer: "d",
    explanation: "Đánh giá kế hoạch tập trung vào tiến độ thực hiện, mức độ đạt mục tiêu và tương quan giữa kết quả với nguồn lực. Đào tạo nhân lực có thể là hoạt động quản lý hữu ích, nhưng không phải mục đích đánh giá được hỏi trực tiếp ở đây.",
    source: "Đề K21 · câu về mục đích đánh giá thực hiện kế hoạch tài chính; đối chiếu: Lập kế hoạch tài chính y tế, PDF tr. 24."
  },
  {
    id: "k21-19",
    topic: "Hoạt động trong cơ sở y tế",
    question: "Trong một cơ sở khám chữa bệnh, hoạt động nào sau đây là hoạt động trực tiếp trong y tế?",
    options: [
      { id: "a", text: "Khám bệnh và điều trị." },
      { id: "b", text: "Vệ sinh và nhà ăn." },
      { id: "c", text: "Kế toán và thu ngân." },
      { id: "d", text: "Hành chính và nhân sự." }
    ],
    answer: "a",
    explanation: "Khám và điều trị trực tiếp tạo ra dịch vụ chăm sóc người bệnh. Vệ sinh, nhà ăn, kế toán, thu ngân và nhân sự là các hoạt động hỗ trợ hoặc gián tiếp.",
    source: "Đề K21 · câu về hoạt động trực tiếp trong cơ sở y tế; đối chiếu: Phân tích chi phí kinh tế trong y tế, PDF tr. 15 (phân biệt hoạt động trực tiếp và gián tiếp)."
  },
  {
    id: "k21-20",
    topic: "Hoạt động trong cơ sở y tế",
    question: "Hoạt động nào sau đây được xem là hoạt động gián tiếp trong cơ sở khám chữa bệnh?",
    options: [
      { id: "a", text: "Chụp X-quang cho người bệnh." },
      { id: "b", text: "Khám bệnh và điều trị." },
      { id: "c", text: "Thực hiện xét nghiệm." },
      { id: "d", text: "Hành chính và nhân sự." }
    ],
    answer: "d",
    explanation: "Hành chính và nhân sự hỗ trợ hoạt động của cơ sở nhưng không trực tiếp cung cấp dịch vụ khám, chẩn đoán hoặc điều trị cho một lượt bệnh nhân cụ thể.",
    source: "Đề K21 · câu về hoạt động gián tiếp trong cơ sở y tế; đối chiếu: Phân tích chi phí kinh tế trong y tế, PDF tr. 15."
  },
  {
    id: "k21-21",
    topic: "Đặc điểm thị trường y tế",
    question: "Một người tiêm vaccine không chỉ bảo vệ bản thân mà còn góp phần giảm lây nhiễm cho cộng đồng. Ví dụ này minh họa đặc tính nào của thị trường chăm sóc sức khỏe?",
    options: [
      { id: "a", text: "Lựa chọn ngược." },
      { id: "b", text: "Ngoại tác tích cực." },
      { id: "c", text: "Bất đối xứng thông tin." },
      { id: "d", text: "Nhu cầu chăm sóc sức khỏe không thể dự báo." }
    ],
    answer: "b",
    explanation: "Ngoại tác tích cực xuất hiện khi hành động của một người đem lại lợi ích cho người khác mà lợi ích đó không chỉ giới hạn ở người trực tiếp thực hiện hành động. Tiêm chủng có thể làm giảm nguy cơ lây lan trong cộng đồng.",
    source: "Đề K21 · câu về vaccine và ngoại tác tích cực; đối chiếu: (SLIDE) Chương 1, PDF tr. 52–55 (đặc tính thị trường chăm sóc sức khỏe và ngoại tác)."
  },
  {
    id: "k21-22",
    topic: "Đặc điểm thị trường y tế",
    question: "Ví dụ nào thể hiện rõ nhất tình trạng bất đối xứng thông tin giữa người cung cấp và người sử dụng dịch vụ chăm sóc sức khỏe?",
    options: [
      { id: "a", text: "Người mua bảo hiểm tự nguyện che giấu tình trạng sức khỏe để được hưởng mức phí thấp hơn." },
      { id: "b", text: "Bệnh nhân dùng dịch vụ nhiều hơn vì chi phí được bảo hiểm chi trả." },
      { id: "c", text: "Một người không thể dự báo chính xác thời điểm mình sẽ mắc bệnh." },
      { id: "d", text: "Bác sĩ có kiến thức chuyên môn vượt trội nên bệnh nhân khó tự đánh giá đầy đủ sự cần thiết của một số xét nghiệm hoặc điều trị." }
    ],
    answer: "d",
    explanation: "Bất đối xứng thông tin xảy ra khi một bên nắm thông tin nhiều hơn bên còn lại. A có thể là lựa chọn ngược; B thường liên quan đến rủi ro đạo đức; C thể hiện tính không chắc chắn của nhu cầu sức khỏe.",
    source: "Đề K21 · câu về bất đối xứng thông tin; đối chiếu: (SLIDE) Chương 1, PDF tr. 53–54."
  },
  {
    id: "k21-23",
    topic: "Phân tích chi phí hiệu quả",
    question: "Trong quy trình phân tích chi phí – hiệu quả, bước xác định và đo lường chi phí của từng phương án tương ứng với nội dung nào?",
    options: [
      { id: "a", text: "Tính tỷ số chi phí – hiệu quả cuối cùng cho từng phương án." },
      { id: "b", text: "Liệt kê các phương án có thể đạt mục tiêu." },
      { id: "c", text: "Xác định và đo lường kết quả sức khỏe của từng phương án." },
      { id: "d", text: "Xác định và đo lường chi phí của từng phương án." }
    ],
    answer: "d",
    explanation: "Trước khi so sánh chi phí với hiệu quả, cần nhận diện và đo lường chi phí của từng lựa chọn. Sau đó mới đo lường kết quả sức khỏe và tính toán, so sánh các chỉ số chi phí – hiệu quả.",
    source: "Đề K21 · câu về các bước phân tích chi phí–hiệu quả; (SLIDE) Chương 1, PDF tr. 43–44 chỉ nêu các loại phân tích kinh tế, không trình bày đầy đủ từng bước."
  },
  {
    id: "k21-24",
    topic: "Tài chính y tế",
    question: "Cách diễn đạt nào phản ánh đầy đủ nhất các chức năng chính của tài chính y tế?",
    options: [
      { id: "a", text: "Huy động nguồn lực tài chính, gộp/chia sẻ rủi ro tài chính và mua sắm hoặc chi trả dịch vụ y tế." },
      { id: "b", text: "Chỉ thu và chi ngân sách y tế công, không liên quan đến phân bổ nguồn lực." },
      { id: "c", text: "Chỉ xây dựng hệ thống tiền lương và đánh giá chi tiêu quốc gia." },
      { id: "d", text: "Trực tiếp cung cấp mọi dịch vụ khám chữa bệnh cho toàn bộ người dân." }
    ],
    answer: "a",
    explanation: "Tài chính y tế thường được mô tả qua ba chức năng chính: huy động nguồn thu, gộp nguồn lực để chia sẻ rủi ro và phân bổ/mua sắm dịch vụ y tế. Chỉ thu ngân sách hoặc trực tiếp cung cấp dịch vụ không bao quát đủ các chức năng này.",
    source: "Đề K21 · câu về chức năng tài chính y tế; đối chiếu khái quát về tài chính và phân bổ nguồn lực: (SLIDE) Chương 1, PDF tr. 43–47; ba chức năng tài chính y tế không được trình bày nguyên văn trong bộ slide."
  },
  {
    id: "k21-25",
    topic: "Phương thức chi trả",
    question: "Ưu điểm nào thường được nhắc đến của phương thức thanh toán theo phí dịch vụ?",
    options: [
      { id: "a", text: "Luôn khuyến khích dự phòng và giảm số lượng dịch vụ được cung cấp." },
      { id: "b", text: "Tự động giúp bên chi trả kiểm soát tổng chi phí." },
      { id: "c", text: "Từng dịch vụ được ghi nhận và tính phí riêng, nên cách tính thanh toán tương đối rõ ràng." },
      { id: "d", text: "Loại bỏ hoàn toàn động cơ cung cấp quá nhiều dịch vụ." }
    ],
    answer: "c",
    explanation: "Thanh toán theo phí dịch vụ gắn khoản chi trả với từng dịch vụ đã cung cấp, vì vậy việc ghi nhận và tính toán khoản thanh toán tương đối trực tiếp. Tuy nhiên, phương thức này có thể tạo động cơ gia tăng số lượng dịch vụ và khiến tổng chi phí khó kiểm soát.",
    source: "Đề K21 · câu về ưu điểm thanh toán theo phí dịch vụ; không thấy trình bày trực tiếp trong 6 PDF bài giảng đã gửi."
  },
  {
    "id": "k21-26",
    "topic": "Cung – cầu",
    "question": "Các yếu tố nào dưới đây tác động trực tiếp đến lượng cung hàng hóa/dịch vụ?",
    "options": [
      {
        "id": "a",
        "text": "Chính sách của chính phủ, kỳ vọng của nhà sản xuất, số lượng nhà cung cấp, điều kiện tự nhiên và kỳ vọng của người tiêu dùng."
      },
      {
        "id": "b",
        "text": "Giá hàng hóa/dịch vụ, chi phí sản xuất, công nghệ sản xuất, thâm hụt thương mại và kỳ vọng của nhà sản xuất."
      },
      {
        "id": "c",
        "text": "Chính sách của chính phủ, chính sách của nhà sản xuất, thu nhập hộ gia đình và giá hàng hóa thay thế."
      },
      {
        "id": "d",
        "text": "Giá hàng hóa/dịch vụ, chi phí sản xuất, công nghệ, chính sách chính phủ, kỳ vọng của nhà sản xuất, số nhà cung cấp, điều kiện tự nhiên và giá hàng hóa liên quan."
      }
    ],
    "answer": "d",
    "explanation": "Lượng cung chịu ảnh hưởng bởi giá bán, chi phí đầu vào, công nghệ, số lượng doanh nghiệp, kỳ vọng của nhà sản xuất và điều kiện tự nhiên. Phương án D bao quát đầy đủ nhất các yếu tố cung trong những lựa chọn này.",
    "source": "Đề K21 · mã đề 001, câu 1, trang đề 1/11; đối chiếu: (SLIDE) Chương 1, PDF tr. 21–24 (cung và yếu tố quyết định cung)."
  },
  {
    "id": "k21-27",
    "topic": "Cung – cầu",
    "question": "Nhân tố nào sau đây không ảnh hưởng trực tiếp đến lượng cầu hàng hóa/dịch vụ trên thị trường?",
    "options": [
      {
        "id": "a",
        "text": "Hàng hóa thay thế và hàng hóa bổ sung."
      },
      {
        "id": "b",
        "text": "Hiệu suất lao động và năng suất lao động xã hội."
      },
      {
        "id": "c",
        "text": "Mẫu mã sản phẩm và chất lượng hàng hóa/dịch vụ."
      },
      {
        "id": "d",
        "text": "Kỳ vọng của người tiêu dùng."
      }
    ],
    "answer": "b",
    "explanation": "Các yếu tố cầu thường gồm thu nhập, giá hàng liên quan, thị hiếu, quy mô dân số và kỳ vọng người tiêu dùng. Năng suất lao động không phải yếu tố quyết định cầu trực tiếp được liệt kê trong slide.",
    "source": "Đề K21 · mã đề 001, câu 2, trang đề 1/11; đối chiếu: (SLIDE) Chương 1, PDF tr. 20 (các yếu tố quyết định cầu)."
  },
  {
    "id": "k21-28",
    "topic": "Cung – cầu",
    "question": "Yếu tố nào làm thay đổi lượng cầu trên đường cầu, nhưng không làm dịch chuyển cả đường cầu của hàng hóa X?",
    "options": [
      {
        "id": "a",
        "text": "Giá của chính hàng hóa/dịch vụ X."
      },
      {
        "id": "b",
        "text": "Thu nhập của dân cư tăng lên."
      },
      {
        "id": "c",
        "text": "Kỳ vọng của người tiêu dùng thay đổi."
      },
      {
        "id": "d",
        "text": "Thị hiếu hoặc chất lượng cảm nhận của sản phẩm thay đổi."
      }
    ],
    "answer": "a",
    "explanation": "Khi giá của chính hàng hóa thay đổi, người tiêu dùng di chuyển dọc theo đường cầu. Các yếu tố khác như thu nhập, kỳ vọng và thị hiếu có thể làm cả đường cầu dịch chuyển.",
    "source": "Đề K21 · mã đề 001, câu 3, trang đề 1/11; đối chiếu: (SLIDE) Chương 1, PDF tr. 20 và 29–30 (yếu tố cầu, đường cầu và dịch chuyển đường cầu)."
  },
  {
    "id": "k21-29",
    "topic": "Cung – cầu",
    "question": "Nếu giá thị trường giảm, tình huống cung – cầu nào phù hợp nhất với cân bằng thị trường?",
    "options": [
      {
        "id": "a",
        "text": "Thiếu phát."
      },
      {
        "id": "b",
        "text": "Cung ít, cầu nhiều."
      },
      {
        "id": "c",
        "text": "Cung nhiều, cầu ít."
      },
      {
        "id": "d",
        "text": "Siêu lạm phát."
      }
    ],
    "answer": "c",
    "explanation": "Khi lượng cung lớn hơn lượng cầu, thị trường có xu hướng dư cung và gây áp lực giảm giá. Ngược lại, khi cầu vượt cung, giá thường tăng.",
    "source": "Đề K21 · mã đề 001, câu 4, trang đề 1/11; đối chiếu: (SLIDE) Chương 1, PDF tr. 28 (quan hệ cung – cầu và giá)."
  },
  {
    "id": "k21-30",
    "topic": "Cung – cầu",
    "question": "Tình huống nào chắc chắn làm giá cân bằng giảm?",
    "options": [
      {
        "id": "a",
        "text": "Cả cung và cầu đều tăng."
      },
      {
        "id": "b",
        "text": "Cả cung và cầu đều giảm."
      },
      {
        "id": "c",
        "text": "Cầu giảm đồng thời cung tăng."
      },
      {
        "id": "d",
        "text": "Cầu tăng đồng thời cung giảm."
      }
    ],
    "answer": "c",
    "explanation": "Cầu giảm làm giá cân bằng có xu hướng giảm; cung tăng cũng làm giá cân bằng giảm. Khi hai thay đổi này cùng xảy ra, cả hai đều đẩy giá theo hướng giảm. Câu được diễn đạt rõ hơn theo hướng giá giảm vì đề gốc chỉ hỏi chung về dịch chuyển giá cân bằng, trong khi cả C và D đều làm giá thay đổi theo hai hướng ngược nhau.",
    "source": "Đề K21 · mã đề 001, câu 5, trang đề 1/11; đối chiếu: (SLIDE) Chương 1, PDF tr. 29–30 (dịch chuyển đường cung, đường cầu và giá cân bằng)."
  },
  {
    "id": "k21-31",
    "topic": "GDP và đầu tư",
    "question": "Một dự án nhà máy trị giá 25 triệu USD hoàn thành 60% giá trị công trình trong năm 2021. Một lô thiết bị lỗi trị giá 2 triệu USD được trả lại; thiết bị thay thế trị giá 0,5 triệu USD được giao trong năm 2021 và 1,5 triệu USD được giao trong năm 2022. Phần công trình còn lại 40% hoàn thành trong năm 2022. Theo cách tính giá trị sản xuất trong năm, giá trị ghi nhận vào GDP Việt Nam năm 2022 theo dữ kiện này là bao nhiêu?",
    "options": [
      {
        "id": "a",
        "text": "25.000.000 USD."
      },
      {
        "id": "b",
        "text": "10.000.000 USD."
      },
      {
        "id": "c",
        "text": "11.500.000 USD."
      },
      {
        "id": "d",
        "text": "8.000.000 USD."
      }
    ],
    "answer": "c",
    "explanation": "Phần công trình hoàn thành trong năm 2022 là 40% × 25 triệu = 10 triệu USD. Cộng thiết bị thay thế trị giá 1,5 triệu USD được giao trong năm 2022: 10 + 1,5 = 11,5 triệu USD. Phải xét phần sản xuất/hoàn thành trong kỳ, không cộng toàn bộ giá trị hợp đồng ngay khi ký.",
    "source": "Đề K21 · mã đề 002, câu 11, trang đề 3/11; đối chiếu định nghĩa GDP: (SLIDE) Chương 1, PDF tr. 34–35. Phép tính theo dữ kiện của đề."
  },
  {
    "id": "k21-32",
    "topic": "GDP và GNP",
    "question": "Trong các tình huống sau, tình huống nào có vẻ được người ra đề dự định dùng để minh họa nguồn thu nhập từ nước ngoài khi hỏi về GNP Việt Nam năm 2025?",
    "options": [
      {
        "id": "a",
        "text": "Một tập đoàn trả nợ gốc và lãi cho khoản vay đầu tư nhà máy từ năm 2020."
      },
      {
        "id": "b",
        "text": "Nhà nước tặng quà tiền mặt cho người dân trong dịp Quốc khánh."
      },
      {
        "id": "c",
        "text": "Kiều hối chuyển từ nước ngoài về TP.HCM."
      },
      {
        "id": "d",
        "text": "Một doanh nghiệp FDI chỉ ký cam kết đầu tư trong tương lai."
      }
    ],
    "answer": "c",
    "explanation": "Trong bốn lựa chọn, C có vẻ là đáp án người ra đề nhắm tới vì liên quan đến dòng tiền từ nước ngoài. Tuy nhiên, cần lưu ý về mặt hạch toán quốc gia: kiều hối không tự động được tính vào GNP chỉ vì tiền được chuyển về; phải xác định đó là thu nhập sơ cấp từ hoạt động sản xuất của công dân/người cư trú hay khoản chuyển giao. Câu hỏi gốc vì thế chưa thật chặt về khái niệm.",
    "source": "Đề K21 · mã đề 002, câu 12, trang đề 3/11; đối chiếu định nghĩa GDP/GNP: (SLIDE) Chương 1, PDF tr. 34 và 38. Lưu ý: ví dụ kiều hối trong đề có điểm chưa chặt về hạch toán GNP."
  },
  {
    "id": "k21-33",
    "topic": "Hiệu quả kỹ thuật",
    "question": "Hiệu quả kỹ thuật trong y tế được hiểu gần nhất là gì?",
    "options": [
      {
        "id": "a",
        "text": "Khả năng phát huy tác dụng của một tác nhân trong điều kiện thử nghiệm."
      },
      {
        "id": "b",
        "text": "Đạt cùng mức đầu ra với ít đầu vào/chi phí nguồn lực hơn, hoặc tạo đầu ra tối đa từ một tập hợp đầu vào nhất định."
      },
      {
        "id": "c",
        "text": "Mức độ phát huy tác dụng của một loại nguồn lực trên thực tế trong điều kiện thường ngày."
      },
      {
        "id": "d",
        "text": "Khối lượng công việc làm được trong một thời gian nhất định."
      }
    ],
    "answer": "b",
    "explanation": "Hiệu quả kỹ thuật tập trung vào mối quan hệ đầu vào – đầu ra: với một lượng đầu vào nhất định tạo ra đầu ra cao nhất, hoặc giữ đầu ra mà dùng ít đầu vào hơn. A gần với efficacy trong điều kiện thử nghiệm; C gần với effectiveness trong thực tế; D mô tả năng suất.",
    "source": "Đề K21 · mã đề 001, câu 10, trang đề 2/11; đối chiếu: (SLIDE) Chương 3, PDF tr. 19–20 (hiệu quả và hiệu quả kỹ thuật trong y tế)."
  },
  {
    "id": "k21-34",
    "topic": "Phân tích chi phí",
    "question": "Vaccine X có chi phí 300.000 đồng/liều và ngăn ngừa 60 ca bệnh trên 1.000 người; vaccine Y có chi phí 450.000 đồng/liều và ngăn ngừa 100 ca bệnh trên 1.000 người. Nếu muốn so sánh chi phí với số ca bệnh được phòng ngừa, loại phân tích nào phù hợp nhất?",
    "options": [
      {
        "id": "a",
        "text": "Phân tích chi phí – thỏa dụng (CUA)."
      },
      {
        "id": "b",
        "text": "Phân tích chi phí – hiệu quả (CEA)."
      },
      {
        "id": "c",
        "text": "Phân tích tối thiểu hóa chi phí (CMA)."
      },
      {
        "id": "d",
        "text": "Phân tích chi phí – lợi ích (CBA)."
      }
    ],
    "answer": "b",
    "explanation": "Kết quả được đo bằng đơn vị sức khỏe tự nhiên là số ca bệnh được phòng ngừa, còn chi phí tính bằng tiền. Đây là phân tích chi phí – hiệu quả (CEA). CUA thường dùng đơn vị như QALY; CMA chỉ phù hợp khi hiệu quả của các lựa chọn tương đương; CBA quy đổi lợi ích sang tiền.",
    "source": "Đề K21 · câu hỏi so sánh chi phí hai loại vaccine; đối chiếu khái quát về đánh giá kinh tế y tế: (SLIDE) Chương 1, PDF tr. 43–44."
  },
  {
    "id": "k21-35",
    "topic": "Chi phí cơ hội",
    "question": "Một sinh viên ngành dược có ba lựa chọn: (1) tự mở nhà thuốc và trực tiếp bán, lợi nhuận 10 triệu đồng/tháng; (2) mở nhà thuốc thuê người bán, lợi nhuận 7 triệu đồng/tháng và làm bệnh viện được 1 triệu đồng/tháng; (3) làm bệnh viện và học thêm, thu nhập 5 triệu đồng/tháng. Theo cách tính trong slide, nếu chọn phương án 2 thì chi phí cơ hội là bao nhiêu?",
    "options": [
      {
        "id": "a",
        "text": "2 triệu đồng/tháng."
      },
      {
        "id": "b",
        "text": "4 triệu đồng/tháng."
      },
      {
        "id": "c",
        "text": "3 triệu đồng/tháng."
      },
      {
        "id": "d",
        "text": "5 triệu đồng/tháng."
      }
    ],
    "answer": "a",
    "explanation": "Phương án 2 đem lại tổng 7 + 1 = 8 triệu đồng/tháng. Phương án tốt nhất bị bỏ lỡ là phương án 1 với 10 triệu đồng/tháng. Theo công thức trình bày trong slide: 10 − 8 = 2 triệu đồng/tháng.",
    "source": "Đề K21 · mã đề 002, câu 41, trang đề 9/11; đối chiếu: Phân tích chi phí kinh tế trong y tế, PDF tr. 5–6 (khái niệm và ví dụ chi phí cơ hội)."
  },
  {
    "id": "k21-36",
    "topic": "Phân loại chi phí người bệnh",
    "question": "Trong bảng chi phí người bệnh có các khoản: nằm viện, xét nghiệm máu, thuốc, ăn uống bên ngoài, xe cấp cứu bệnh viện và xe Grab. Có bao nhiêu khoản thuộc nhóm chi phí vật chất trực tiếp trong y tế?",
    "options": [
      {
        "id": "a",
        "text": "2 khoản."
      },
      {
        "id": "b",
        "text": "3 khoản."
      },
      {
        "id": "c",
        "text": "4 khoản."
      },
      {
        "id": "d",
        "text": "5 khoản."
      }
    ],
    "answer": "b",
    "explanation": "Nằm viện, xét nghiệm máu và thuốc là ba khoản chi phí vật chất trực tiếp trong y tế. Ăn uống bên ngoài và phương tiện đi lại được xếp vào chi phí trực tiếp ngoài y tế theo cách phân loại trên slide.",
    "source": "Đề K21 · mã đề 002, câu 42, trang đề 9/11; đối chiếu: Phân tích chi phí kinh tế trong y tế, PDF tr. 7–9 (phân loại chi phí người sử dụng dịch vụ)."
  },
  {
    "id": "k21-37",
    "topic": "Tính chi phí người bệnh",
    "question": "Theo bảng chi phí bệnh nhân: nằm viện 5 ngày × 500.000 đồng/ngày; xét nghiệm 2 lần × 250.000 đồng; thuốc 1 đơn × 1.500.000 đồng; ăn uống 5 ngày × 200.000 đồng; Grab 2 lượt × 300.000 đồng; chi phí khác 3 ngày × 200.000 đồng. Tổng các khoản chi phí vật chất là bao nhiêu?",
    "options": [
      {
        "id": "a",
        "text": "5.700.000 đồng."
      },
      {
        "id": "b",
        "text": "6.200.000 đồng."
      },
      {
        "id": "c",
        "text": "6.700.000 đồng."
      },
      {
        "id": "d",
        "text": "7.100.000 đồng."
      }
    ],
    "answer": "c",
    "explanation": "Cộng từng khoản: 2.500.000 + 500.000 + 1.500.000 + 1.000.000 + 600.000 + 600.000 = 6.700.000 đồng.",
    "source": "Đề K21 · mã đề 002, bảng chi phí bệnh nhân ở trang đề 9/11; đối chiếu cách phân loại và tính chi phí: Phân tích chi phí kinh tế trong y tế, PDF tr. 8–10."
  },
  {
    "id": "k21-38",
    "topic": "Lập kế hoạch tài chính",
    "question": "Theo bài giảng, cơ sở quan trọng nhất để lập dự toán/kế hoạch tài chính cho một chương trình hoặc hoạt động y tế là gì?",
    "options": [
      {
        "id": "a",
        "text": "Chỉ dựa vào tổng số tiền đã chi trong năm trước."
      },
      {
        "id": "b",
        "text": "Chỉ tiêu số lượng bệnh nhân, không cần phân tích công việc."
      },
      {
        "id": "c",
        "text": "Cấu trúc phân chia công việc (WBS), từ đó xác định nguồn lực và chi phí cho từng công việc."
      },
      {
        "id": "d",
        "text": "Mức kinh phí còn dư sau khi kết thúc năm."
      }
    ],
    "answer": "c",
    "explanation": "WBS chia kế hoạch thành các cấu phần/công việc cụ thể. Với từng công việc có thể xác định nhu cầu nguồn lực và tính chi phí, sau đó tổng hợp thành dự toán.",
    "source": "Đề K21 · mã đề 002, câu 43, trang đề 9/11; đối chiếu: Lập kế hoạch tài chính y tế, PDF tr. 12–15 (phương pháp lập dự toán và WBS)."
  },
  {
    "id": "k21-39",
    "topic": "Lập kế hoạch tài chính",
    "question": "Kế hoạch tài chính y tế hỗ trợ trực tiếp nhất cho hoạt động nào?",
    "options": [
      {
        "id": "a",
        "text": "Chỉ việc điều trị chuyên môn tại giường bệnh."
      },
      {
        "id": "b",
        "text": "Công tác quản lý, điều hành và quyết định sử dụng nguồn lực của cơ sở/chương trình y tế."
      },
      {
        "id": "c",
        "text": "Chỉ hoạt động truyền thông cho người bệnh."
      },
      {
        "id": "d",
        "text": "Thay thế hoàn toàn kế hoạch chuyên môn và kế hoạch nhân lực."
      }
    ],
    "answer": "b",
    "explanation": "Kế hoạch tài chính dự trù các nguồn lực tài chính cần có và cách thu – chi cho hoạt động y tế, giúp người quản lý phân bổ nguồn lực, kiểm soát chi tiêu và điều hành hoạt động.",
    "source": "Đề K21 · mã đề 002, câu 44, trang đề 9–10/11; đối chiếu: Lập kế hoạch tài chính y tế, PDF tr. 5 và 10."
  },
  {
    "id": "k21-40",
    "topic": "Lập kế hoạch tài chính",
    "question": "Khi lập kế hoạch tài chính y tế, đơn giá, chi phí và định mức chi cần được xây dựng như thế nào?",
    "options": [
      {
        "id": "a",
        "text": "Theo ước lượng chủ quan của người lập kế hoạch."
      },
      {
        "id": "b",
        "text": "Theo mức chi cao nhất của các cơ sở tư nhân."
      },
      {
        "id": "c",
        "text": "Theo quy định, định mức và hướng dẫn hiện hành."
      },
      {
        "id": "d",
        "text": "Không cần căn cứ định mức nếu ngân sách còn đủ."
      }
    ],
    "answer": "c",
    "explanation": "Bài giảng nêu rõ nguyên tắc lập kế hoạch tài chính phải tuân thủ luật pháp, quy định và thỏa thuận; đơn giá, chi phí và định mức chi phải theo quy định.",
    "source": "Đề K21 · nhóm câu về nguyên tắc lập kế hoạch tài chính; đối chiếu: Lập kế hoạch tài chính y tế, PDF tr. 11."
  },
  {
    "id": "k21-41",
    "topic": "Phân tích chi phí – hiệu quả",
    "question": "Theo câu hỏi trong đề K21, bước 3 của phân tích chi phí – hiệu quả là gì?",
    "options": [
      {
        "id": "a",
        "text": "Tính tỷ số chi phí – hiệu quả cuối cùng của từng phương án."
      },
      {
        "id": "b",
        "text": "Xác định các phương án có thể đạt được mục tiêu."
      },
      {
        "id": "c",
        "text": "Xác định và đo lường hiệu quả của từng phương án."
      },
      {
        "id": "d",
        "text": "Xác định và đo lường chi phí của từng phương án."
      }
    ],
    "answer": "c",
    "explanation": "Theo trình tự được hỏi trong đề, bước 3 là xác định và đo lường kết quả/hiệu quả của từng phương án. Lưu ý: bộ slide đính kèm chỉ giới thiệu các loại phân tích kinh tế y tế, không trình bày chi tiết trình tự này, nên đáp án được đối chiếu theo câu hỏi trong đề.",
    "source": "Đề K21 · mã đề 002, câu 35, trang đề 7/11; đối chiếu khái quát: (SLIDE) Chương 1, PDF tr. 43–44 (các phương pháp đánh giá kinh tế y tế)."
  },
  {
    "id": "k21-42",
    "topic": "Chi phí trung bình",
    "question": "Nếu tổng chi phí của hoạt động điều trị là 170 triệu đồng và tạo ra 1.200 ngày-giường, chi phí trung bình trên mỗi ngày-giường xấp xỉ bao nhiêu?",
    "options": [
      {
        "id": "a",
        "text": "141.667 đồng."
      },
      {
        "id": "b",
        "text": "170.000 đồng."
      },
      {
        "id": "c",
        "text": "204.000 đồng."
      },
      {
        "id": "d",
        "text": "245.000 đồng."
      }
    ],
    "answer": "a",
    "explanation": "Chi phí trung bình = tổng chi phí ÷ số lượng dịch vụ = 170.000.000 ÷ 1.200 = 141.666,7 đồng/ngày-giường, làm tròn khoảng 141.667 đồng.",
    "source": "Câu luyện tập bổ sung từ phương pháp trong slide; đối chiếu: Phân tích chi phí kinh tế trong y tế, PDF tr. 20–21 (số lượng dịch vụ và chi phí trung bình)."
  },
  {
    "id": "k21-43",
    "topic": "Phân bổ chi phí",
    "question": "Trong phân bổ chi phí từng bước, đặc điểm nào mô tả đúng phương pháp này nhất?",
    "options": [
      {
        "id": "a",
        "text": "Chỉ phân bổ chi phí của hoạt động trực tiếp cho chính hoạt động đó."
      },
      {
        "id": "b",
        "text": "Phân bổ chi phí giữa các hoạt động gián tiếp theo trình tự, trước khi phân bổ các chi phí này cho hoạt động trực tiếp."
      },
      {
        "id": "c",
        "text": "Không phân bổ bất kỳ chi phí gián tiếp nào."
      },
      {
        "id": "d",
        "text": "Tất cả chi phí gián tiếp luôn chia đều cho từng người bệnh."
      }
    ],
    "answer": "b",
    "explanation": "Phân bổ từng bước phân phối chi phí các hoạt động gián tiếp theo một trình tự đã chọn, bao gồm việc phân bổ sang các hoạt động khác trước khi tổng hợp chi phí cho các hoạt động trực tiếp.",
    "source": "Câu luyện tập bổ sung từ sơ đồ phân bổ chi phí; đối chiếu: Phân tích chi phí kinh tế trong y tế, PDF tr. 17–19."
  },
  {
    "id": "k21-44",
    "topic": "Chi phí trực tiếp ngoài y tế",
    "question": "Khoản nào dưới đây là chi phí vật chất trực tiếp ngoài y tế của người sử dụng dịch vụ y tế?",
    "options": [
      {
        "id": "a",
        "text": "Tiền xét nghiệm máu tại bệnh viện."
      },
      {
        "id": "b",
        "text": "Tiền thuốc do cơ sở y tế cấp."
      },
      {
        "id": "c",
        "text": "Tiền ăn uống và đi lại phát sinh do đi khám/điều trị."
      },
      {
        "id": "d",
        "text": "Chi phí sử dụng giường bệnh."
      }
    ],
    "answer": "c",
    "explanation": "Ăn uống, lưu trú và đi lại là chi phí vật chất trực tiếp ngoài cơ sở y tế. Xét nghiệm, thuốc và giường bệnh thuộc nhóm chi phí trực tiếp trong y tế.",
    "source": "Câu luyện tập bổ sung từ phân loại chi phí người sử dụng dịch vụ; đối chiếu: Phân tích chi phí kinh tế trong y tế, PDF tr. 7–9."
  },
  {
    "id": "k21-45",
    "topic": "Điều chỉnh chi phí theo CPI",
    "question": "Chi phí xét nghiệm máu năm 2018 là 250.000 đồng/lần. CPI năm 2018 là 354 và CPI năm 2022 là 315. Quy đổi chi phí năm 2018 về mặt bằng giá năm 2022 theo công thức CPI, kết quả xấp xỉ bao nhiêu?",
    "options": [
      {
        "id": "a",
        "text": "222.458 đồng."
      },
      {
        "id": "b",
        "text": "250.000 đồng."
      },
      {
        "id": "c",
        "text": "280.000 đồng."
      },
      {
        "id": "d",
        "text": "315.000 đồng."
      }
    ],
    "answer": "a",
    "explanation": "Theo công thức quy đổi chi phí quá khứ về hiện tại: chi phí quy đổi = 250.000 × (315/354) ≈ 222.458 đồng. Đây là giá trị quy đổi theo các CPI đã cho trong câu hỏi.",
    "source": "Câu luyện tập bổ sung theo ví dụ CPI trong slide; đối chiếu: Phân tích chi phí kinh tế trong y tế, PDF tr. 22–23."
  },
  {
    "id": "k21-46",
    "topic": "Chiết khấu",
    "question": "Một khoản chi dự kiến phát sinh sau 2 năm là 1.210.000 đồng. Nếu tỷ lệ chiết khấu là 10%/năm, giá trị hiện tại của khoản chi xấp xỉ bao nhiêu?",
    "options": [
      {
        "id": "a",
        "text": "1.000.000 đồng."
      },
      {
        "id": "b",
        "text": "1.100.000 đồng."
      },
      {
        "id": "c",
        "text": "1.210.000 đồng."
      },
      {
        "id": "d",
        "text": "1.331.000 đồng."
      }
    ],
    "answer": "a",
    "explanation": "Giá trị hiện tại = 1.210.000/(1 + 0,10)^2 = 1.210.000/1,21 = 1.000.000 đồng. Chiết khấu đưa giá trị tương lai về thời điểm hiện tại.",
    "source": "Câu luyện tập bổ sung theo công thức chiết khấu; đối chiếu: Phân tích chi phí kinh tế trong y tế, PDF tr. 24–25."
  },
  {
    "id": "k21-47",
    "topic": "Phương pháp lập kế hoạch tài chính",
    "question": "Đặc điểm nào đúng với phương pháp lập kế hoạch tài chính từ trên xuống (Top-down)?",
    "options": [
      {
        "id": "a",
        "text": "Mỗi nhân viên tự lập dự toán chi tiết rồi cộng lại, không có ước tính tổng thể."
      },
      {
        "id": "b",
        "text": "Cấp quản lý ước tính ngân sách tổng thể trước, sau đó phân chia cho các công việc nhỏ hơn."
      },
      {
        "id": "c",
        "text": "Chỉ dựa vào hóa đơn thực tế của năm trước, không cần xem kế hoạch mới."
      },
      {
        "id": "d",
        "text": "Không phân bổ ngân sách theo các công việc hoặc hoạt động."
      }
    ],
    "answer": "b",
    "explanation": "Trong phương pháp Top-down, nhà quản lý cấp cao ước tính tổng chi phí trước rồi phân bổ dự toán cho các phần việc nhỏ hơn hoặc các tiểu dự án.",
    "source": "Câu luyện tập bổ sung theo bài giảng; đối chiếu: Lập kế hoạch tài chính y tế, PDF tr. 12."
  },
  {
    "id": "k21-48",
    "topic": "Phương pháp lập kế hoạch tài chính",
    "question": "Đặc điểm nào đúng với phương pháp lập kế hoạch tài chính từ dưới lên (Bottom-up)?",
    "options": [
      {
        "id": "a",
        "text": "Bắt đầu từ tổng ngân sách do cấp cao ấn định rồi chia xuống."
      },
      {
        "id": "b",
        "text": "Bỏ qua chi phí nhân công, vật tư và thiết bị."
      },
      {
        "id": "c",
        "text": "Xác định và ước tính chi phí của từng yếu tố/công việc, sau đó tổng hợp thành ngân sách chung."
      },
      {
        "id": "d",
        "text": "Chỉ lập kế hoạch sau khi kết thúc chương trình."
      }
    ],
    "answer": "c",
    "explanation": "Bottom-up bắt đầu bằng việc xác định các yếu tố cấu thành chi phí ở cấp công việc, định lượng và quy thành tiền, rồi tổng hợp ngân sách của các công việc để ước tính tổng chi phí.",
    "source": "Câu luyện tập bổ sung theo bài giảng; đối chiếu: Lập kế hoạch tài chính y tế, PDF tr. 13."
  },
  {
    "id": "k21-49",
    "topic": "Chi phí cơ hội",
    "question": "Định nghĩa nào mô tả đúng nhất chi phí cơ hội?",
    "options": [
      {
        "id": "a",
        "text": "Toàn bộ khoản tiền ghi trên hóa đơn của phương án được chọn."
      },
      {
        "id": "b",
        "text": "Tổng chi phí kế toán cộng với thuế phải nộp."
      },
      {
        "id": "c",
        "text": "Lợi ích của phương án tốt nhất bị bỏ lỡ khi lựa chọn một phương án khác."
      },
      {
        "id": "d",
        "text": "Khoản chi phí phát sinh bất kể có lựa chọn hay không."
      }
    ],
    "answer": "c",
    "explanation": "Chi phí cơ hội là lợi ích gắn với lựa chọn thay thế tốt nhất mà người ra quyết định từ bỏ khi chọn phương án hiện tại. Nó không nhất thiết xuất hiện trên sổ sách kế toán.",
    "source": "Câu luyện tập bổ sung; đối chiếu: Phân tích chi phí kinh tế trong y tế, PDF tr. 5–6."
  },
  {
    "id": "k21-50",
    "topic": "Giám sát kế hoạch tài chính",
    "question": "Mục đích nào phù hợp với hoạt động theo dõi, giám sát thực hiện kế hoạch tài chính y tế?",
    "options": [
      {
        "id": "a",
        "text": "Kiểm tra việc thu – chi theo kế hoạch, dự báo thu – chi tương lai và phát hiện chênh lệch để điều chỉnh kịp thời."
      },
      {
        "id": "b",
        "text": "Chỉ tổng hợp số lượt khám bệnh, không xem xét chi tiêu."
      },
      {
        "id": "c",
        "text": "Chỉ đánh giá chất lượng chuyên môn của từng bác sĩ."
      },
      {
        "id": "d",
        "text": "Chỉ lập báo cáo vào cuối năm và không cần điều chỉnh."
      }
    ],
    "answer": "a",
    "explanation": "Theo dõi và giám sát nhằm bảo đảm tuân thủ kế hoạch thu – chi, dự báo tài chính, phát hiện khác biệt giữa thực tế và dự toán, từ đó điều chỉnh kịp thời và nâng hiệu quả sử dụng nguồn lực.",
    "source": "Câu luyện tập bổ sung theo bài giảng; đối chiếu: Lập kế hoạch tài chính y tế, PDF tr. 23."
  }
];