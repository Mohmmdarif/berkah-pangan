const Footer = () => {
    return (
        <footer>
            <div className="p-10 text-white bg-footer">
                <div className="max-w-4xl mx-auto">
                    <div className="grid lg:grid-cols-3 gap-5">
                        <div className="mb-5">
                            <h4 className="text-orange-300 font-bold mb-6 text-2xl">Berkah Pangan</h4>
                            <p className='font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam rem odit maxime nam corrupti,
                                ex fugit voluptas nulla esse suscipit, perferendis odio tempora pariatur reprehenderit repudiandae
                                ut in cum culpa?</p>
                        </div>
                        <div className="mb-5">
                            <h4 className="text-orange-300 font-bold mb-6 text-2xl">Opsi Berkah Pangan</h4>
                            <ul>
                                <li className="pb-4 font-medium"> <a href="#" className="hover:text-orange-300">Tentang Kami</a></li>
                                <li className="pb-4 font-medium"> <a href="#" className="hover:text-orange-300">Donasi</a></li>
                                <li className="pb-4 font-medium"> <a href="#" className="hover:text-orange-300">Usul Penerima</a></li>
                                <li className="pb-4 font-medium"> <a href="#" className="hover:text-orange-300">Relawan</a></li>
                                <li className="pb-4 font-medium"> <a href="#" className="hover:text-orange-300">Kontak Kami</a></li>
                            </ul>
                        </div>
                        <div className="mb-5">
                            <h4 className="text-orange-300 font-bold mb-6 text-2xl">Hubungi Kami</h4>
                            <ul>
                                <li className="pb-4 font-medium"> <a href="#" className="hover:text-orange-300">Lorem ipsum dolor, sit amet consectetur</a></li>
                                <li className="pb-4 font-medium"> <a href="#" className="hover:text-orange-300">xxxx-xxxx-xxxx</a></li>
                                <li className="pb-4 font-medium"> <a href="#" className="hover:text-orange-300">Berkahpanganid@yahoo.com</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full bg-footer text-copyright px-10">
                <hr />
                <div className="text-center mt-10">
                    <div className="pb-10">
                        © Copyright 2023 <strong><span>Berkah Pangan</span></strong> - All Right's Reserved
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer